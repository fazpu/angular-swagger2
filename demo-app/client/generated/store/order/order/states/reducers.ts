/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface OrderState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialOrderState: OrderState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Order_Order';
export const getOrderStateSelector = createFeatureSelector<OrderState>(selectorName);

export function OrderReducer(
  state: OrderState = initialOrderState,
  action: actions.OrderAction): OrderState {
  switch (action.type) {
    case actions.Actions.ORDER_START: return {...state, loading: true, error: null};
    case actions.Actions.ORDER_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ORDER_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.ORDER_CLEAN: return initialOrderState;
    default: return state;
  }
}
