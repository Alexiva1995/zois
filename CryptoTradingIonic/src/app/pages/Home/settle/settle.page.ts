import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.page.html',
  styleUrls: ['./settle.page.scss'],
})
export class SettlePage implements OnInit {
  constructor(
    private modalcontroller: ModalController,
    public router: Router,
    private menuCtrl: MenuController
  ) {}

  close() {
    this.modalcontroller.dismiss();
    // this.router.navigate(['/tabs'])
  }

  ngOnInit() {}
  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }
}
