import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@nx-ng-ngrx-demo/router';
import { BooksStoreModule } from '@nx-ng-ngrx-demo/books';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { Http404Component } from './404.component';
import { AppRoutingModule } from './app.routing.module';
import { reducers, metaReducers } from './store';
import { RouterEffects } from './store/effects';
import { RouterState } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    Http404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([RouterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BooksStoreModule,
    RouterStoreModule.forRoot({
      routerState: RouterState.Minimal
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
