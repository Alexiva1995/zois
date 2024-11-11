import { Component, OnInit } from '@angular/core';
import { NgOtpInputConfig } from 'ng-otp-input';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  constructor(){}

  ngOnInit() {
  }

  otp: string = '';

  onOtpChange(event: any) {
    console.log(event);
  }

  otpConfig: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus:false,
    placeholder: '',
    inputStyles: {
      display: 'flex',
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      backgroundColor: 'var(--ion-color-back)',
      color: 'var(--ion-color-txt)',
      fontSize:'24px',
      fontFamily:'SF-UI-Display-Bold',
      borderColor:'var(--ion-color-back)',
    },
    containerStyles: {
      display: 'flex',
    },
    // inputClass: 'each_input',
    // containerClass:'all_input'
  };

}
