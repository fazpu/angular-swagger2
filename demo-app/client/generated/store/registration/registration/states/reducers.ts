/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface RegistrationState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRegistrationState: RegistrationState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Registration_Registration';
export const getRegistrationStateSelector = createFeatureSelector<RegistrationState>(selectorName);

export function RegistrationReducer(
  state: RegistrationState = initialRegistrationState,
  action: actions.RegistrationAction): RegistrationState {
  switch (action.type) {
    case actions.Actions.REGISTRATION_START: return {...state, loading: true, error: null};
    case actions.Actions.REGISTRATION_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.REGISTRATION_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.REGISTRATION_CLEAN: return initialRegistrationState;
    default: return state;
  }
}
