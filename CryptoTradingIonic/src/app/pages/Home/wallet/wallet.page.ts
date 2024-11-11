import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private modalcontroller:ModalController,public router:Router) { }

  close(){
    this.modalcontroller.dismiss();
    this.router.navigate(['/Walleet'])
  }


  ngOnInit() {
  }

}
