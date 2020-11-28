import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState, StoreRouterConfig, StoreRouterConnectingModule } from '@ngrx/router-store';

import { routerFeatureKey } from './store/router.reducer';
import { RouterEffects } from './store/router.effects';
import { RouterFacade } from './store/router.facade';

export function storeRouterConnectingModuleProviders(config: StoreRouterConfig) {
  return StoreRouterConnectingModule.forRoot(config).providers;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(routerFeatureKey, routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule,
    /*
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Full,
    }),
    */
  ],
  providers: [RouterFacade],
  exports: [StoreRouterConnectingModule]
})
export class RouterStoreModule {
  static forRoot(config: StoreRouterConfig): ModuleWithProviders<RouterStoreModule> {
    return {
      ngModule: RouterStoreModule,
      providers: [
        ...storeRouterConnectingModuleProviders(config),
      ]
    };
  }
}