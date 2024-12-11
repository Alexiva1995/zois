import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPageRoutingModule } from './request-routing.module';

import { RequestPage } from './request.page';
import { DashboardComponentsModule } from '../../tabs/dashboard-components/dashboard-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule,
    DashboardComponentsModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
