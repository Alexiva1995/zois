import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradingpPageRoutingModule } from './tradingp-routing.module';

import { TradingpPage } from './tradingp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradingpPageRoutingModule
  ],
  declarations: [TradingpPage]
})
export class TradingpPageModule {}
