import { NavigationExtras } from '@angular/router';
import { createAction, props, union } from '@ngrx/store';

export const navigate = createAction(
  '[Router] Navigate',
  props<{ commands: any[]; extras?: NavigationExtras; }>()
);

export const navigateBack = createAction(
  '[Router] Navigate Back'
)

export const navigateForward = createAction(
  '[Router] Navigate Forward'
);

const actions = union({
  navigate,
  navigateBack,
  navigateForward
});

export type RouterActions = typeof actions;
