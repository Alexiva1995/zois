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
        this.http.post<any>('http://localhost:3000/users/login', {
          email: action.email,
          password: action.password,
        }).pipe(
          map((response) => {
            this.loadingService.hideLoading();
            return AuthActions.loginSuccess(response);
          }),
          catchError((error) => {
            this.loadingService.hideLoading();
            console.log(error);
            this.toastService.showError('Error en el login. Por favor, intenta de nuevo.');
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );


  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) => {
          // Guarda el token en localStorage o en el lugar que prefieras
          console.log(action);

          localStorage.setItem('authToken', action.token);
          localStorage.setItem('user', JSON.stringify(action.user));

          // Redirige a la pantalla principal
          this.router.navigate(['/tabs']);
        })
      ),
    { dispatch: false }
  );
}
