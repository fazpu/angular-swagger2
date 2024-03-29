/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {ShowTicketDetailAction, ShowTicketDetailActions} from './actions';

export interface ShowTicketDetailState {
  data: __model.TicketDetailOutput[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialShowTicketDetailState: ShowTicketDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Ticketing_ShowTicketDetail';
export const getShowTicketDetailState = createFeatureSelector<ShowTicketDetailState>(selectorName);

export function ShowTicketDetailReducer(
  state: ShowTicketDetailState = initialShowTicketDetailState,
  action: ShowTicketDetailAction): ShowTicketDetailState {

  switch (action.type) {
    case ShowTicketDetailActions.SHOW_TICKET_DETAIL_START:
      return {...state, loading: true, error: null};

    case ShowTicketDetailActions.SHOW_TICKET_DETAIL_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case ShowTicketDetailActions.SHOW_TICKET_DETAIL_ERROR:
      return {...state, error: action.payload, loading: false};

    case ShowTicketDetailActions.SHOW_TICKET_DETAIL_CLEAN:
      return initialShowTicketDetailState;

    default:
      return state;
  }
}
