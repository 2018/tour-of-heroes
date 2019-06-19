
import {NgModule} from '@angular/core';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {StoreModule} from '@ngrx/store';
import {entityConfig} from './hero-metadata';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${environment.appApi.baseUrl}/api`,
  timeout: 3000, // request timeout

};
@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class HeroStoreModule {
  constructor() { }
}
