import { RouterReducerState } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface RouterPartialState {
  readonly [routerFeatureKey]: RouterReducerState;
}
