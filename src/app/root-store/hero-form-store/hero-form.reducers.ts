import {Action, combineReducers} from '@ngrx/store';
import {
  createFormGroupState,
  createFormStateReducerWithUpdate,
  FormGroupState,
  updateGroup,
  validate
} from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

export const HERO_FORM_ID = 'heroForm';

export interface HeroFormValue {
  id?: string;
  name: string;
  full_name: string;
  thumb: string;
  photo: string;
  description: string;
  text: string;
}

export interface State {
  heroForm: {
    formState: FormGroupState<HeroFormValue>;
    submittedValue: HeroFormValue | undefined;
  };
}

export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'material/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: HeroFormValue) { }
}

export const initialHeroFormState = createFormGroupState<HeroFormValue>(HERO_FORM_ID, {
  name: '',
  full_name: '',
  thumb: '',
  photo: '',
  description: '',
  text: ''
});

const validationFormGroupReducer = createFormStateReducerWithUpdate<HeroFormValue>(updateGroup<HeroFormValue>({
  name: validate(required),
  full_name: validate(required),
  thumb: validate(required),
  photo: validate(required),
  description: validate(required)
}));

const reducers = combineReducers<State['heroForm'], any>({
  formState(s = initialHeroFormState, a: Action) {
    return validationFormGroupReducer(s, a);
  },
  submittedValue(s: HeroFormValue | undefined, a: SetSubmittedValueAction) {
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;
      default:
        return s;
    }
  },
});

export function reducer(state:  State['heroForm'], action: Action) {
  return reducers(state, action);
}
