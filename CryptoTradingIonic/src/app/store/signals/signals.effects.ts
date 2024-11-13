import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DashboardSignalsService } from './../../services/dashboard-signals.service';
import * as SignalsActions from './signals.actions';

@Injectable()
export class SignalsEffects {
  loadSignals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignalsActions.loadSignals),
      mergeMap(() =>
        this.signalsService.getSignals().pipe(
          map((signals) => SignalsActions.loadSignalsSuccess({ signals })),
          catchError((error) =>
            of(SignalsActions.loadSignalsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private signalsService: DashboardSignalsService
  ) {}
}
