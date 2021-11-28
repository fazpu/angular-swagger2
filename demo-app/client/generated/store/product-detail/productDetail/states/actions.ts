/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ProductDetailParams} from '../../../../controllers/ProductDetail';
import * as __model from '../../../../model';

export enum ProductDetailActions {
  PRODUCTDETAIL_START = '[ProductDetail productDetail] Start',
  PRODUCTDETAIL_SUCCESS = '[ProductDetail productDetail] Success',
  PRODUCTDETAIL_ERROR = '[ProductDetail productDetail] Error',
  PRODUCTDETAIL_CLEAN = '[ProductDetail productDetail] Clean',
}

export class ProductDetailStart implements Action {
  public readonly type = ProductDetailActions.PRODUCTDETAIL_START;
  constructor(public payload: ProductDetailParams) {}
}

export class ProductDetailSuccess implements Action {
  public readonly type = ProductDetailActions.PRODUCTDETAIL_SUCCESS;
  constructor(public payload: __model.ProductDetail) {}
}

export class ProductDetailError implements Action {
  public readonly type = ProductDetailActions.PRODUCTDETAIL_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ProductDetailClean implements Action {
  public readonly type = ProductDetailActions.PRODUCTDETAIL_CLEAN;
}

export type ProductDetailAction = ProductDetailStart |
ProductDetailSuccess |
ProductDetailError |
ProductDetailClean;
