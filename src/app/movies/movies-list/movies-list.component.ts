import {Component, OnInit} from '@angular/core';
import {Movie} from '../models/movie';
import {MoviesStore} from '../movies.store';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [
    MoviesStore
  ]
})
export class MoviesListComponent implements OnInit {
  movies$ = this.moviesStore.movies$;

  constructor(private readonly moviesStore: MoviesStore) {
  }

  ngOnInit() {
    this.moviesStore.setState({movies: []});
  }

  addMovie(name: string) {
    this.moviesStore.addMovie({name});
  }

  deleteMovie(movie: Movie) {
    // this.moviesStore.deleteMovie({movie});
  }
}
