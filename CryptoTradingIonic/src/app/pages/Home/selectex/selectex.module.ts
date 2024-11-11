import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectexPageRoutingModule } from './selectex-routing.module';

import { SelectexPage } from './selectex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectexPageRoutingModule
  ],
  declarations: [SelectexPage]
})
export class SelectexPageModule {}
