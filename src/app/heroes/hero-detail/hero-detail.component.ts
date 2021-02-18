import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectHero} from '../../root-store/hero-store';
import * as fromHeroActions from '../../root-store/hero-store/hero.actions';
import {Hero} from '../models';

@Component({
  selector: 'app-hero',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  hero$ = this.store.pipe(select(selectHero));
  name: string;

  constructor(
    private store: Store<any>
  ) {
  }

  goBack() {
    this.store.dispatch(fromHeroActions.navigateTo({prop: '/heroes'}));
  }

  update(val: Hero) {
    if (this.name) {
      const entity = {...val, name: this.name}
      this.store.dispatch(fromHeroActions.updateHero({entity}));
    }
    this.goBack();
  }
}
