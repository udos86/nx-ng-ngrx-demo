import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { RouterPartialState } from './router.reducer';
import { selectRouteId, selectRouteParams, selectRouter } from './router.selectors';

@Injectable()
export class RouterFacade {
  router$ = this.store.pipe(select(selectRouter));
  idParam$ = this.store.pipe(select(selectRouteId));
  params$ = this.store.pipe(select(selectRouteParams));

  constructor(private store: Store<RouterPartialState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
