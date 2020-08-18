import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        HeroesListComponent,
        HeroDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ]
})
export class HeroesModule {
}
