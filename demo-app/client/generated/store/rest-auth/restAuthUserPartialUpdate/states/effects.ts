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
import {RestAuthService} from '../../../../controllers/RestAuth';
import * as actions from './actions';

@Injectable()
export class RestAuthUserPartialUpdateEffects {
  @Effect()
  RestAuthUserPartialUpdate = this.storeActions.pipe(
    ofType<actions.RestAuthUserPartialUpdateStart>(actions.Actions.RESTAUTHUSERPARTIALUPDATE_START),
    switchMap((action: actions.RestAuthUserPartialUpdateStart) => this.restauthService.restAuthUserPartialUpdate(action.payload)
      .pipe(
        map(result => new actions.RestAuthUserPartialUpdateSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.RestAuthUserPartialUpdateError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}