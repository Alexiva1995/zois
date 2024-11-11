import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wallet1PageRoutingModule } from './wallet1-routing.module';

import { Wallet1Page } from './wallet1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wallet1PageRoutingModule
  ],
  declarations: [Wallet1Page]
})
export class Wallet1PageModule {}
