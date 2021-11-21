/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface RestAuthLogoutCreateState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRestAuthLogoutCreateState: RestAuthLogoutCreateState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'RestAuth_RestAuthLogoutCreate';
export const getRestAuthLogoutCreateStateSelector = createFeatureSelector<RestAuthLogoutCreateState>(selectorName);

export function RestAuthLogoutCreateReducer(
  state: RestAuthLogoutCreateState = initialRestAuthLogoutCreateState,
  action: actions.RestAuthLogoutCreateAction): RestAuthLogoutCreateState {
  switch (action.type) {
    case actions.Actions.RESTAUTHLOGOUTCREATE_START: return {...state, loading: true, error: null};
    case actions.Actions.RESTAUTHLOGOUTCREATE_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.RESTAUTHLOGOUTCREATE_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.RESTAUTHLOGOUTCREATE_CLEAN: return initialRestAuthLogoutCreateState;
    default: return state;
  }
}
