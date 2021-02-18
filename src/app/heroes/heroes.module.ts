import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {ContentHeaderModule} from '../shared/content-header/content-header.module';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {NgrxFormsModule} from 'ngrx-forms';
import {MaterialModule} from '../shared/material';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailComponent,
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    ContentHeaderModule,
    NgrxFormsModule,
    MaterialModule
  ]
})
export class HeroesModule {
}
