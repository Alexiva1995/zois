import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/Login/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/Login/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./pages/Home/balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'selectex',
    loadChildren: () => import('./pages/Home/selectex/selectex.module').then( m => m.SelectexPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/Home/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/Setting/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./pages/Home/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'settle',
    loadChildren: () => import('./pages/Home/settle/settle.module').then( m => m.SettlePageModule)
  },
  {
    path: 'candles1',
    loadChildren: () => import('./pages/Home/candles1/candles1.module').then( m => m.Candles1PageModule)
  },
  {
    path: 'bit',
    loadChildren: () => import('./pages/Home/bit/bit.module').then( m => m.BitPageModule)
  },
  {
    path: 'tradingp',
    loadChildren: () => import('./pages/Home/tradingp/tradingp.module').then( m => m.TradingpPageModule)
  },
  {
    path: 'bitcoin',
    loadChildren: () => import('./pages/Home/bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/Home/card/card.module').then( m => m.CardPageModule)
  },

  {
    path: 'intro',
    loadChildren: () => import('./pages/Introduction/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'intro1',
    loadChildren: () => import('./pages/Introduction/intro1/intro1.module').then( m => m.Intro1PageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/Introduction/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'welcome1',
    loadChildren: () => import('./pages/Introduction/welcome1/welcome1.module').then( m => m.Welcome1PageModule)
  },
  {
    path: 'welcome2',
    loadChildren: () => import('./pages/Introduction/welcome2/welcome2.module').then( m => m.Welcome2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/Home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'wallet1',
    loadChildren: () => import('./pages/Home/wallet1/wallet1.module').then( m => m.Wallet1PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'watch',
    loadChildren: () => import('./pages/Home/watch/watch.module').then( m => m.WatchPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/Setting/pin/pin.module').then( m => m.PinPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
