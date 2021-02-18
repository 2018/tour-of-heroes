import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule'},
  {path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
