import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wallet1Page } from './wallet1.page';

const routes: Routes = [
  {
    path: '',
    component: Wallet1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wallet1PageRoutingModule {}
