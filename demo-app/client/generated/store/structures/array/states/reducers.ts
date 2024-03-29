/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {ArrayAction, ArrayActions} from './actions';

export interface ArrayState {
  data: __model.ArrayGeneratedInlineModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialArrayState: ArrayState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Structures_Array';
export const getArrayState = createFeatureSelector<ArrayState>(selectorName);

export function ArrayReducer(
  state: ArrayState = initialArrayState,
  action: ArrayAction): ArrayState {

  switch (action.type) {
    case ArrayActions.ARRAY_START:
      return {...state, loading: true, error: null};

    case ArrayActions.ARRAY_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case ArrayActions.ARRAY_ERROR:
      return {...state, error: action.payload, loading: false};

    case ArrayActions.ARRAY_CLEAN:
      return initialArrayState;

    default:
      return state;
  }
}
