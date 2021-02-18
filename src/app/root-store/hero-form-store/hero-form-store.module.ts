import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromHeroForm from './hero-form.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(fromHeroForm.HERO_FORM_ID, fromHeroForm.reducer),
  ],
  providers: [
  ]
})
export class HeroFormStoreModule {
}
