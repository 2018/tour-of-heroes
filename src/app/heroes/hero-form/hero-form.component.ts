import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {ResetAction, SetValueAction} from 'ngrx-forms';
import {filter, map, take} from 'rxjs/operators';
import {initialHeroFormState, SetSubmittedValueAction} from '../../root-store/hero-form-store/hero-form.reducers';
import * as fromHeroActions from '../../root-store/hero-store/hero.actions';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  heroFormState$ = this.store.select(s => s.heroForm.formState);
  // submittedValue$ = this.store.select(s => s.heroForm.submittedValue);

  constructor(
    private store: Store<any>
  ) {
  }

  reset() {
    this.store.dispatch(new SetValueAction(initialHeroFormState.id, initialHeroFormState.value));
    this.store.dispatch(new ResetAction(initialHeroFormState.id));
  }

  submit() {
    this.heroFormState$.pipe(
      take(1),
      filter(s => s.isValid),
      map(fs => {
        this.store.dispatch(fromHeroActions.updateHero({entity: fs.value}));
        return new SetSubmittedValueAction(fs.value)
      }),
    ).subscribe(this.store);
  }
}
