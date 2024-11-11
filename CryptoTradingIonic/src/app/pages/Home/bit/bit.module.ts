import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitPageRoutingModule } from './bit-routing.module';

import { BitPage } from './bit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitPageRoutingModule
  ],
  declarations: [BitPage]
})
export class BitPageModule {}
