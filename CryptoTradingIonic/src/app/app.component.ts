import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { IntroService } from './services/intro.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController, public router: Router, private navCtrl: NavController, private introService: IntroService) {
    // this.checkIntro();
  }

  menuType: string = 'overlay';

  closemenu() {
    this.menuCtrl.close();
    this.router.navigate(['/wallet'])
  }
  closemenu1() {
    this.menuCtrl.close();
    this.router.navigate(['/home'])
  }
  closemenu2() {
    this.menuCtrl.close();
    this.router.navigate(['/request'])
  }
  closemenu3() {
    this.menuCtrl.close();
    this.router.navigate(['/settle'])
  }
  closemenu4() {
    this.menuCtrl.close();
    this.router.navigate(['/card'])
  }
  closemenu5() {
    this.menuCtrl.close();
    this.router.navigate(['/balance'])
  }

  closemenuHistorial() {
    this.menuCtrl.close();
    this.router.navigate(['/historical'])
  }
  closemenu6() {
    this.menuCtrl.close();
    this.router.navigate(['/bitcoin'])
  }
  closemenu7() {
    this.menuCtrl.close();
    this.router.navigate(['/tabs/setting'])
  }

  async checkIntro() {
    const hasSeenIntro = await this.introService.hasSeenIntro();
    if (!hasSeenIntro) {
      this.navCtrl.navigateRoot('/intro');
    }else{
      this.navCtrl.navigateRoot('/welcome2');
    }
  }
}
