/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthUserPartialUpdateEffects} from './states/effects';
import {RestAuthUserPartialUpdateReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, RestAuthUserPartialUpdateReducer),
    NgrxEffectsModule.forFeature([RestAuthUserPartialUpdateEffects]),
  ],
  providers: [
    RestAuthService,
  ],
})
export class RestAuthUserPartialUpdateModule {}