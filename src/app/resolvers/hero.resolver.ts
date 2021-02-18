import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {Hero} from '../heroes/models';
import {HeroPartialState} from '../root-store/hero-store/hero.reducers';
import {selectHero} from '../root-store/hero-store/hero.selectors';
import * as fromHeroActions from '../root-store/hero-store/hero.actions';

@Injectable()
export class HeroResolver implements Resolve<Hero> {
  constructor(private store: Store<HeroPartialState>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
    const entity$ = this.store.pipe(
      select(selectHero, {id: route.params.id})
    );

    return entity$.pipe(
      filter(entity => {
        if (!entity) {
          this.store.dispatch(fromHeroActions.loadHero({id: route.params.id}));
        }

        return !!entity;
      }),
      take(1)
    );
  }
}
