import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectHeroes} from '../../root-store/hero-store/hero.selectors';
import * as fromHeroActions from '../../root-store/hero-store/hero.actions';
import {Hero} from '../models';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
    heroes$ = this.store.pipe(select(selectHeroes));

    constructor(private store: Store<any>) {}

    addHero(name: string) {
        this.store.dispatch(fromHeroActions.createHero({entity: {name}}));
    }

    deleteHero(hero: Hero) {
        this.store.dispatch(fromHeroActions.deleteHero({id: hero.id}));
    }
}
