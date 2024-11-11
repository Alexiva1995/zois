import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: '',
        redirectTo: 'candles',
        pathMatch: 'full'
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: 'stock',
        loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
      },
     {
      path:'candles',
      loadChildren:()=>import('./candles/candles.module').then(m=>m.CandlesPageModule)
     }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
