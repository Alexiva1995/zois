import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@NgModule({
  declarations: [FilterModalComponent],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FilterModalComponent],
})
export class SharedComponentsModule {}
