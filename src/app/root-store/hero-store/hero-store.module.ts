import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HeroEffects} from './hero.effects';
import * as fromHeroes from './hero.reducers';
import {HeroResolver} from '../../resolvers/hero.resolver';
import {HeroesResolver} from '../../resolvers/heroes.resolver';

@NgModule({
    imports: [
        StoreModule.forFeature(fromHeroes.HERO_FEATURE_KEY, fromHeroes.reducer),
        EffectsModule.forFeature([HeroEffects]),
    ],
    providers: [
        HeroResolver,
        HeroesResolver
    ]
})
export class HeroStoreModule {
}
