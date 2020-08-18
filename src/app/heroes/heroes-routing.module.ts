import {RouterModule, Routes} from '@angular/router';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroesResolver} from '../resolvers/heroes.resolver';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroResolver} from '../resolvers/hero.resolver';
import {NgModule} from '@angular/core';

const heroesRoutes: Routes = [
    { path: '', children: [
        {path: '', redirectTo: 'heroes', pathMatch: 'full'},
        {path: 'heroes', component: HeroesListComponent, resolve: {entity: HeroesResolver}},
        {path: ':id', component: HeroDetailComponent, resolve: {entity: HeroResolver}},
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [RouterModule]
 })
export class HeroesRoutingModule {}
