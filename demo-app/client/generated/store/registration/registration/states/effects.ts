/* eslint-disable max-len */
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
import {RegistrationService} from '../../../../controllers/Registration';
import * as actions from './actions';

@Injectable()
export class RegistrationEffects {
  @Effect()
  Registration = this.storeActions.pipe(
    ofType<actions.RegistrationStart>(actions.Actions.REGISTRATION_START),
    switchMap((action: actions.RegistrationStart) => this.registrationService.registration(action.payload)
      .pipe(
        map(result => new actions.RegistrationSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.RegistrationError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private registrationService: RegistrationService,
  ) {}
}
