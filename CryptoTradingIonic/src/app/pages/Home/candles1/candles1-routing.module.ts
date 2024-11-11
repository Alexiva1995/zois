import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Candles1Page } from './candles1.page';

const routes: Routes = [
  {
    path: '',
    component: Candles1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Candles1PageRoutingModule {}
