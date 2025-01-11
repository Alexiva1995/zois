import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { IntroService } from './services/intro.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userName: string = '';
  isLoggedIn: boolean = false;
  userRole: null | string = null;

  constructor(
    private menuCtrl: MenuController,
    public router: Router,
    private navCtrl: NavController,
    private introService: IntroService,
    private userService: UserService
  ) {}

  menuType: string = 'overlay';
  ngOnInit() {
    this.getUserName();
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.userName = user.name;
        this.userRole = user.role;
        this.isLoggedIn = true;
      }
    });
  }
  closemenu() {
    this.menuCtrl.close();
    this.router.navigate(['/wallet']);
  }
  closemenu1() {
    this.menuCtrl.close();
    this.router.navigate(['/home']);
  }
  closemenu2() {
    this.menuCtrl.close();
    this.router.navigate(['/request']);
  }
  closemenu3() {
    this.menuCtrl.close();
    this.router.navigate(['/settle']);
  }
  closemenu4() {
    this.menuCtrl.close();
    this.router.navigate(['/card']);
  }
  closemenu5() {
    this.menuCtrl.close();
    this.router.navigate(['/balance']);
  }

  closemenuHistorial() {
    this.menuCtrl.close();
    this.router.navigate(['/historical']);
  }
  closemenu6() {
    this.menuCtrl.close();
    this.router.navigate(['/bitcoin']);
  }
  closemenu7() {
    this.menuCtrl.close();
    this.router.navigate(['/tabs/setting']);
  }

  goTo(route: string) {
    this.menuCtrl.close();
    this.router.navigate([route]);
  }

  async checkIntro() {
    const hasSeenIntro = await this.introService.hasSeenIntro();
    if (!hasSeenIntro) {
      this.navCtrl.navigateRoot('/intro');
    } else {
      this.navCtrl.navigateRoot('/welcome2');
    }
  }

  getUserName() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userName = parsedUser.name;
      this.userRole = parsedUser.role;
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.userName = '';
    this.userRole = null;
  }
}
