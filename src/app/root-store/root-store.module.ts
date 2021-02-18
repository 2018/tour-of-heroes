import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroStoreModule} from './hero-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {HeroFormStoreModule} from './hero-form-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroStoreModule,
    HeroFormStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ]
})
export class RootStoreModule {
}
