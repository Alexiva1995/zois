import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private toastService: ToastService,
    private navCtrl: NavController
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      mergeMap((action) =>
        this.http
          .post<any>('/api/login', {
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((user) => {
              this.navCtrl.navigateForward('/tabs');
              return AuthActions.loginSuccess({ user });
            }),
            catchError((error) => {
              this.toastService.showError(
                'Error en el login. Por favor, intenta de nuevo.'
              );
              //QUITAR CUANDO SE HAGA LA IMPLEMENTACION
              this.navCtrl.navigateForward('/tabs');
              //QUITAR CUANDO SE HAGA LA IMPLEMENTACION
              return of(
                AuthActions.loginFailure({
                  error: error.message || 'Error desconocido',
                })
              );
            })
          )
      )
    )
  );
}
