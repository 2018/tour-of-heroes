import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, adapter, HERO_FEATURE_KEY } from './hero.reducers';

// Lookup the 'Hero' feature state managed by NgRx
const getHeroesState = createFeatureSelector<State>(HERO_FEATURE_KEY);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Hero ids
export const selectHeroIds = createSelector(
    getHeroesState,
    selectIds
);

// select the array of Heroes
export const selectHeroes = createSelector(
    getHeroesState,
    selectAll
);

// select the total Hero count
export const selectHeroCount = createSelector(
    getHeroesState,
    selectTotal
);

// select the Hero by Id
export const selectHero = createSelector(
    getHeroesState,
    (state: State, prop: { id: string }) => state.entities[prop?.id]
);

// select entity loaded flag
export const selectHeroesLoaded = createSelector(
    getHeroesState,
    state => state.loaded
);

// select entity error
export const selectError = createSelector(
    getHeroesState,
    state => state.error
);
