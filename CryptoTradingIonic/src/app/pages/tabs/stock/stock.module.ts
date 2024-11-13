import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { TabsPageModule } from '../tabs.module';
import { DashboardComponentsModule } from "../dashboard-components/dashboard-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule,
    DashboardComponentsModule
],
  declarations: [StockPage],
})
export class StockPageModule {}
