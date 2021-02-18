import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {HeroPartialState} from '../root-store/hero-store/hero.reducers';
import {selectHeroesLoaded} from '../root-store/hero-store/hero.selectors';
import * as fromHeroActions from '../root-store/hero-store/hero.actions';

@Injectable()
export class HeroesResolver implements Resolve<boolean> {
  constructor(private store: Store<HeroPartialState>) {
  }

  resolve(): Observable<boolean> {
    const loaded$ = this.store.pipe(select(selectHeroesLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (!loaded) {
          this.store.dispatch(fromHeroActions.loadHeroes());
        }

        return loaded;
      }),
      take(1)
    );
  }
}
