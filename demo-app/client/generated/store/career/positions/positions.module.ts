/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {CareerService} from '../../../controllers/Career';
import {PositionsEffects} from './states/effects';
import {PositionsReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, PositionsReducer),
    NgrxEffectsModule.forFeature([PositionsEffects]),
  ],
  providers: [
    CareerService,
  ],
})
export class PositionsModule {}
