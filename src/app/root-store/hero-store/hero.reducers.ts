import {Action, createReducer, on} from '@ngrx/store';
import { Hero } from '../../heroes/models';
import * as fromHeroActions from './hero.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const HERO_FEATURE_KEY = 'heroes';

export interface State extends EntityState<Hero> {
    loaded: boolean;
    error?: Error | any;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export interface HeroPartialState {
    readonly [HERO_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState({
    // Additional entity state properties
    loaded: false,
    error: null
});

const _reducer = createReducer(
    initialState,
    on(fromHeroActions.loadHeroesSuccess, (state, { data }) => {
        return adapter.setAll(data, {
            ...state,
            loaded: true
        });
    }),
    on(fromHeroActions.loadHeroesFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    }),

    on(fromHeroActions.loadHeroSuccess, (state, { entity }) => {
        return adapter.setOne(entity, state);
    }),
    on(fromHeroActions.loadHeroesFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    }),

    on(fromHeroActions.createHeroSuccess, (state, { entity }) => {
        return adapter.addOne(entity, state);
    }),
    on(fromHeroActions.createHeroFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    }),

    on(fromHeroActions.updateHeroSuccess, (state, { entity }) => {
        return adapter.updateOne({ id: entity.id, changes: entity }, state);
    }),
    on(fromHeroActions.updateHeroFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    }),

    on(fromHeroActions.deleteHeroSuccess, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(fromHeroActions.deleteHeroFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    }),
);

export function reducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}
