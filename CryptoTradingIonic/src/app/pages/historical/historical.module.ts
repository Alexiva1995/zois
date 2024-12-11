import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricalPageRoutingModule } from './historical-routing.module';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { HistoricalPage } from './historical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricalPageRoutingModule,
    SharedComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HistoricalPage],
})
export class HistoricalPageModule {}
