import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitPage } from './bit.page';

const routes: Routes = [
  {
    path: '',
    component: BitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitPageRoutingModule {}
