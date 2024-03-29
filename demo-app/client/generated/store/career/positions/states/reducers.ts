/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {PositionsAction, PositionsActions} from './actions';

export interface PositionsState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialPositionsState: PositionsState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Career_Positions';
export const getPositionsState = createFeatureSelector<PositionsState>(selectorName);

export function PositionsReducer(
  state: PositionsState = initialPositionsState,
  action: PositionsAction): PositionsState {

  switch (action.type) {
    case PositionsActions.POSITIONS_START:
      return {...state, loading: true, error: null};

    case PositionsActions.POSITIONS_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case PositionsActions.POSITIONS_ERROR:
      return {...state, error: action.payload, loading: false};

    case PositionsActions.POSITIONS_CLEAN:
      return initialPositionsState;

    default:
      return state;
  }
}
