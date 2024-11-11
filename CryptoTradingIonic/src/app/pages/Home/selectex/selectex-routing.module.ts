import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectexPage } from './selectex.page';

const routes: Routes = [
  {
    path: '',
    component: SelectexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectexPageRoutingModule {}
