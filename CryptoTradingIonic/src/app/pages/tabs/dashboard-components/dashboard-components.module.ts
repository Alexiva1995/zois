import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddSignalModalComponent } from './add-signal-modal/add-signal-modal.component';
import { DashboardProfessorsComponent } from './dashboard-professors/dashboard-professors.component';
import { DashboardSignalsComponent } from './dashboard-signals/dashboard-signals.component';

@NgModule({
  declarations: [
    DashboardSignalsComponent,
    DashboardProfessorsComponent,
    AddSignalModalComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DashboardSignalsComponent,
    DashboardProfessorsComponent,
    AddSignalModalComponent,
  ],
})
export class DashboardComponentsModule {}
