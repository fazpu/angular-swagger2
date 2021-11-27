/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {RestAuthLogoutCreateAction, RestAuthLogoutCreateActions} from './actions';

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
  action: RestAuthLogoutCreateAction): RestAuthLogoutCreateState {
  switch (action.type) {
    case RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_START: return {...state, loading: true, error: null};
    case RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_SUCCESS: return {...state, data: action.payload, loading: false};
    case RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_ERROR: return {...state, error: action.payload, loading: false};
    case RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_CLEAN: return initialRestAuthLogoutCreateState;
    default: return state;
  }
}
