/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {GoodsService} from '../../../controllers/Goods';
import {GetGoodsListEffects} from './states/effects';
import {GetGoodsListReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, GetGoodsListReducer),
    NgrxEffectsModule.forFeature([GetGoodsListEffects]),
  ],
  providers: [
    GoodsService,
  ],
})
export class GetGoodsListModule {}
