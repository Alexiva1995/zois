import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandlesPageRoutingModule } from './candles-routing.module';

import { CandlesPage } from './candles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandlesPageRoutingModule
  ],
  declarations: [CandlesPage]
})
export class CandlesPageModule {}
