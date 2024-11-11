import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Candles1PageRoutingModule } from './candles1-routing.module';

import { Candles1Page } from './candles1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Candles1PageRoutingModule
  ],
  declarations: [Candles1Page]
})
export class Candles1PageModule {}
