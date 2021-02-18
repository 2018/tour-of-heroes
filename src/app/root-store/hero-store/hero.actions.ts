import {createAction, props} from '@ngrx/store';
import {Hero} from '../../heroes/models';

export const loadHeroes = createAction(
  '[Hero] Load Heroes'
);

export const loadHeroesSuccess = createAction(
  '[Hero] Load Heroes Success',
  props<{ data: Hero[] }>()
);

export const loadHeroesFail = createAction(
  '[Hero] Load Heroes Fail',
  props<{ error: Error | any }>()
);

export const loadHero = createAction(
  '[Hero] Load Hero',
  props<{ id: string }>()
);

export const loadHeroSuccess = createAction(
  '[Hero] Load Hero Success',
  props<{ entity: Hero }>()
);

export const loadHeroFail = createAction(
  '[Hero] Load Hero Fail',
  props<{ error: Error | any }>()
);

export const updateHero = createAction(
  '[Hero] Update Hero',
  props<{ entity: Hero }>()
);

export const updateHeroSuccess = createAction(
  '[Hero] Update Hero Success',
  props<{ entity: Hero }>()
);

export const updateHeroFail = createAction(
  '[Hero] Update Hero Fail',
  props<{ error: Error | any }>()
);

export const createHero = createAction(
  '[Hero] Create Hero',
  props<{ entity: Hero }>()
);

export const createHeroSuccess = createAction(
  '[Hero] Create Hero Success',
  props<{ entity: Hero }>()
);

export const createHeroFail = createAction(
  '[Hero] Create Hero Fail',
  props<{ error: Error | any }>()
);

export const deleteHero = createAction(
  '[Hero] Delete Hero',
  props<{ id: string }>()
);

export const deleteHeroSuccess = createAction(
  '[Hero] Delete Hero Success',
  props<{ id: string }>()
);

export const deleteHeroFail = createAction(
  '[Hero] Delete Hero Fail',
  props<{ error: Error | any }>()
);

export const navigateTo = createAction(
  '[Router] Navigate to',
  props<{ prop: string }>()
);
