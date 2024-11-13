import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      tap(() => this.loadingService.showLoading()),
      mergeMap((action) =>
        this.http.post<any>('/api/login', {
          email: action.email,
          password: action.password,
        }).pipe(
          map((user) => {
            this.loadingService.hideLoading();
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) => {
            this.loadingService.hideLoading();
            this.toastService.showError('Error en el login. Por favor, intenta de nuevo.');
            return of(AuthActions.loginFailure({ error: error.message || 'Error desconocido' }));
          })
        )
      )
    )
  );


  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/tabs']))
      ),
    { dispatch: false }
  );


  /* Only for test */
  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => this.router.navigate(['/tabs']))
      ),
    { dispatch: false }
  );
  /* Only for test */
}
