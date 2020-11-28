import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { navigate, navigateBack } from './router.actions';

@Injectable()
export class RouterEffects {

  navigate$ = createEffect(() => this.actions$.pipe(
    ofType(navigate),
    tap(({ commands, extras }) => this.router.navigate(commands, extras))
  ), { dispatch: false });

  navigateBack$ = createEffect(() => this.actions$.pipe(
    ofType(navigateBack),
    tap(() => this.location.back())
  ), { dispatch: false });

  navigateForward$ = createEffect(() => this.actions$.pipe(
    ofType(navigateBack),
    tap(() => this.location.forward())
  ), { dispatch: false });

  constructor(private readonly router: Router, private readonly location: Location, private readonly actions$: Actions) { }
}
