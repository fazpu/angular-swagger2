/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface ProductDetailState {
  data: __model.ProductDetail | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialProductDetailState: ProductDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ProductDetail_ProductDetail';
export const getProductDetailStateSelector = createFeatureSelector<ProductDetailState>(selectorName);

export function ProductDetailReducer(
  state: ProductDetailState = initialProductDetailState,
  action: actions.ProductDetailAction): ProductDetailState {
  switch (action.type) {
    case actions.Actions.PRODUCTDETAIL_START: return {...state, loading: true, error: null};
    case actions.Actions.PRODUCTDETAIL_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.PRODUCTDETAIL_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.PRODUCTDETAIL_CLEAN: return initialProductDetailState;
    default: return state;
  }
}
