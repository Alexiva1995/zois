import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './../../../store/auth/auth.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
