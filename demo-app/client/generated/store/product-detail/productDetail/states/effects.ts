/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {ProductDetailService} from '../../../../controllers/ProductDetail';
import * as actions from './actions';

@Injectable()
export class ProductDetailEffects {
  @Effect()
  ProductDetail = this.storeActions.pipe(
    ofType<actions.ProductDetailStart>(actions.Actions.PRODUCTDETAIL_START),
    switchMap((action: actions.ProductDetailStart) => this.productdetailService.productDetail(action.payload)
      .pipe(
        map(result => new actions.ProductDetailSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.ProductDetailError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private productdetailService: ProductDetailService,
  ) {}
}