/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface GetGoodsListState {
  data: __model.GetGoodsListGeneratedInlineModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialGetGoodsListState: GetGoodsListState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Goods_GetGoodsList';
export const getGetGoodsListStateSelector = createFeatureSelector<GetGoodsListState>(selectorName);

export function GetGoodsListReducer(
  state: GetGoodsListState = initialGetGoodsListState,
  action: actions.GetGoodsListAction): GetGoodsListState {
  switch (action.type) {
    case actions.Actions.GETGOODSLIST_START: return {...state, loading: true, error: null};
    case actions.Actions.GETGOODSLIST_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.GETGOODSLIST_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.GETGOODSLIST_CLEAN: return initialGetGoodsListState;
    default: return state;
  }
}
