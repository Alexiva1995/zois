import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardProfessorsComponent } from './dashboard-professors/dashboard-professors.component';
import { DashboardSignalsComponent } from './dashboard-signals/dashboard-signals.component';

@NgModule({
  declarations: [DashboardSignalsComponent, DashboardProfessorsComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DashboardSignalsComponent, DashboardProfessorsComponent],
})
export class DashboardComponentsModule {}
