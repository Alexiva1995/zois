import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { professorsReducer } from 'src/app/store/professors/professors.reducer';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { StoreModule } from '@ngrx/store';
import { signalsReducer } from 'src/app/store/signals/signals.reducer';
import { DashboardComponentsModule } from './dashboard-components/dashboard-components.module';
import { TabsPage } from './tabs.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    DashboardComponentsModule,
    StoreModule.forFeature('professors', professorsReducer),
    StoreModule.forFeature('signals', signalsReducer),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
