import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export const routerKey = 'router';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('meta:debug', action.type, state);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
