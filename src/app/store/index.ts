import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { ILayout, layoutReducer } from './layout/layout.reducer';
import { environment } from '../../environments/environment';

// all new reducers should be define here
export interface IAppState {
  layout: ILayout;
}

// all new reducers should be define here
export const reducers: ActionReducerMap<IAppState> = {
  layout: layoutReducer,
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [storeFreeze]
  : [];
