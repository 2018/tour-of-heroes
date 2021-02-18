import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {
}
