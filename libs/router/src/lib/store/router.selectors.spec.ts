import { RouterReducerState } from '@ngrx/router-store';

import * as fromRouter from './router.reducer';
import { selectRouterState } from './router.selectors';

describe('Router Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRouterState({
      [fromRouter.routerFeatureKey]: {} as RouterReducerState
    });

    expect(result).toEqual({});
  });
});
