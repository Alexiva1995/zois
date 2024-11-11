import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandlesPage } from './candles.page';

const routes: Routes = [
  {
    path: '',
    component: CandlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandlesPageRoutingModule {}
