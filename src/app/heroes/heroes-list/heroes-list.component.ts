import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectHeroes} from '../../root-store/hero-store/hero.selectors';
import * as fromHeroActions from '../../root-store/hero-store/hero.actions';
import {Hero} from '../models';
import {MatDialog} from '@angular/material/dialog';
import {HeroFormComponent} from '../hero-form/hero-form.component';
import {SetValueAction} from 'ngrx-forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  headerTitle = 'Heroes list';
  heroes$ = this.store.pipe(select(selectHeroes));

  constructor(
    private store: Store<any>,
    public dialog: MatDialog
  ) {
  }

  addHero(hero: Hero) {
    this.store.dispatch(fromHeroActions.createHero({entity: {...hero}}));
  }

  editHero(hero: Hero) {
    this.store.dispatch(new SetValueAction('heroForm', hero));

    const dialogRef = this.dialog.open(HeroFormComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
    // this.store.dispatch(fromHeroActions.createHero({entity: {name}}));
  }

  deleteHero(hero: Hero) {
    this.store.dispatch(fromHeroActions.deleteHero({id: hero.id}));
  }
}
