import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandlesPageRoutingModule } from './candles-routing.module';

import { DashboardComponentsModule } from '../dashboard-components/dashboard-components.module';
import { CandlesPage } from './candles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandlesPageRoutingModule,
    DashboardComponentsModule,
  ],
  declarations: [CandlesPage],
})
export class CandlesPageModule {}
