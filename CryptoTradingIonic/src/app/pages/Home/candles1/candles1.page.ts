import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-candles1',
  templateUrl: './candles1.page.html',
  styleUrls: ['./candles1.page.scss'],
})
export class Candles1Page implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  openmenu(){
    this.menuCtrl.enable(true,'main-Id');
    this.menuCtrl.open('main-Id');
  }

}
