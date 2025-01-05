import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/core/services/user.service';
import { SignalsService } from 'src/app/services/signals.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  isModalOpen: boolean = false;
  isLoading: boolean = false;
  userRole: any;
  user: any;
  error: string = '';
  signals: any[] = [];
  constructor(
    private menuCtrl: MenuController,
    private signalService: SignalsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUserName();
    this.loadSignals();
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        this.userRole = user.role;
      }
    });
  }
  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }
  openAddSignalModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    console.log('close modal');
    this.isModalOpen = false;
  }

  handleSignalAdded(signal: any) {
    console.log(signal);
    // this.signalService.addSignal(signal);
    this.closeModal();
  }

  loadSignals(filters?: any) {
    this.isLoading = true;
    console.log('load signals');
    this.signalService.getSignalsByProfessor(filters).subscribe({
      next: (data: any) => {
        this.isLoading = false;
        console.log(data);
        this.signals = data.signals;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Error loading dashboard data.';
        this.isLoading = false;
      },
    });
  }

  getUserName() {
    this.user = localStorage.getItem('user');
  }
}
