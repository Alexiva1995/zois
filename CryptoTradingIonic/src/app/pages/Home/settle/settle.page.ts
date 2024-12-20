import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.page.html',
  styleUrls: ['./settle.page.scss'],
})
export class SettlePage implements OnInit {
  students = [
    {
      id: 1,
      name: 'Carlos García',
      status: 'Active',
      expirationDate: '2024-12-31',
      followers: 300,
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'María López',
      status: 'Inactive',
      expirationDate: '2025-01-15',
      followers: 500,
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Luis Fernández',
      status: 'Active',
      expirationDate: '2024-12-20',
      followers: 450,
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Ana Pérez',
      status: 'Inactive',
      expirationDate: '2025-02-10',
      followers: 320,
      photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      name: 'José Martínez',
      status: 'Active',
      expirationDate: '2024-12-25',
      followers: 600,
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];

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
