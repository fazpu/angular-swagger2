/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface DashedState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDashedState: DashedState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Params_Dashed';
export const getDashedStateSelector = createFeatureSelector<DashedState>(selectorName);

export function DashedReducer(
  state: DashedState = initialDashedState,
  action: actions.DashedAction): DashedState {
  switch (action.type) {
    case actions.Actions.DASHED_START: return {...state, loading: true, error: null};
    case actions.Actions.DASHED_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.DASHED_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.DASHED_CLEAN: return initialDashedState;
    default: return state;
  }
}
