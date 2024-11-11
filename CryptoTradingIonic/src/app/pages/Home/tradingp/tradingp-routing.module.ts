import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingpPage } from './tradingp.page';

const routes: Routes = [
  {
    path: '',
    component: TradingpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradingpPageRoutingModule {}
