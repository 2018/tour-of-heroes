import {Component, Input} from '@angular/core';
import {Movie} from '../models/movie';
import {Observable} from 'rxjs';
import {MoviesStore} from '../movies.store';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  movie$: Observable<Movie>;
  name: string;

  @Input()
  set movieId(value: string) {
    // calls effect with value. 👇 Notice it's a single string value.
    this.moviesStore.getMovie(value);
    this.movie$ = this.moviesStore.selectMovie(value);
  }

  constructor(private readonly moviesStore: MoviesStore) {
  }


  onChangeName(val: string) {
    this.name = val;
  }
}
