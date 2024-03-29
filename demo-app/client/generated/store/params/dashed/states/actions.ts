/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {DashedParams} from '../../../../controllers/Params';

export enum DashedActions {
  DASHED_START = '[Params dashed] Start',
  DASHED_SUCCESS = '[Params dashed] Success',
  DASHED_ERROR = '[Params dashed] Error',
  DASHED_CLEAN = '[Params dashed] Clean',
}

export class DashedStart implements Action {
  public readonly type = DashedActions.DASHED_START;
  constructor(public payload: DashedParams) {}
}

export class DashedSuccess implements Action {
  public readonly type = DashedActions.DASHED_SUCCESS;
  constructor(public payload: void) {}
}

export class DashedError implements Action {
  public readonly type = DashedActions.DASHED_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class DashedClean implements Action {
  public readonly type = DashedActions.DASHED_CLEAN;
}

export type DashedAction = DashedStart |
DashedSuccess |
DashedError |
DashedClean;
