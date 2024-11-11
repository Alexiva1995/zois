import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-candles',
  templateUrl: './candles.page.html',
  styleUrls: ['./candles.page.scss'],
})
export class CandlesPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  openmenu(){
    this.menuCtrl.enable(true,'main-Id');
    this.menuCtrl.open('main-Id');
  }

}
