import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  searchQuery: string = '';
  professors = [
    { id: 1, name: 'John Doe', profileImage: 'https://dummyimage.com/50x50/ddd/000', isFollowing: true },
    { id: 2, name: 'Jane Smith', profileImage: 'https://dummyimage.com/50x50/ddd/000', isFollowing: true },
    { id: 3, name: 'Alice Johnson', profileImage: 'https://dummyimage.com/50x50/ddd/000', isFollowing: true },
  ];

  filteredProfessors = this.professors;
  constructor(
    private modalcontroller: ModalController,
    public router: Router,
    private menuCtrl: MenuController
  ) {}

  close() {
    this.modalcontroller.dismiss();
    this.router.navigate(['/Walleet']);
  }

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }
  onSearchChange() {
    if (this.searchQuery) {
      this.filteredProfessors = this.professors.filter(professor =>
        professor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProfessors = this.professors;
    }
  }

  toggleFollow(professor: any) {
    professor.isFollowing = !professor.isFollowing;
  }

  ngOnInit() {}
}
