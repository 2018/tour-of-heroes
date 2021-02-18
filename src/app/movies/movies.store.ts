import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Movie} from './models/movie';
import {Observable} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {MoviesService} from '../services/movies.service';

export interface MoviesState {
  movies: Movie[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {

  constructor(private readonly moviesService: MoviesService) {
    super({movies: []});
  }

  readonly movies$ = this.select(state => state.movies);

  // Each new call of getMovie(id) pushed that id into movieId$ stream.
  readonly getMovie = this.effect((movieId$: Observable<string>) => {
    return movieId$.pipe(
      // Handle race condition with the proper choice of the flattening operator.
      switchMap((id) => this.moviesService.get(id).pipe(
        // Act on the result within inner pipe.
        tap({
          next: (movie: any) => this.addMovie(movie),
          error: (e) => console.log(e),
        }),
        // Handle potential error within inner pipe.
        catchError((err) => err),
      ))
    );
  })

  readonly addMovie = this.updater((state, movie: Movie) => ({
    movies: [...state.movies, movie]
  }));

  selectMovie(movieId: string) {
    return this.select((state) => state.movies.find(m => m.id === movieId));
  }
}
