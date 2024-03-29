/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {LogoutService} from '../../../controllers/Logout';
import {LogoutEffects} from './states/effects';
import {LogoutReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, LogoutReducer),
    NgrxEffectsModule.forFeature([LogoutEffects]),
  ],
  providers: [
    LogoutService,
  ],
})
export class LogoutModule {}
