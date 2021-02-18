import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const moviesRoutes: Routes = [
  {
    path: '', children: [
      {path: 'movies', component: MoviesListComponent},
      {path: ':id', component: MovieDetailComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
