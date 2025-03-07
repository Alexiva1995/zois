import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  userType: 'estudiante' | 'profesor' | null = null;
  selectTab: any;
  @ViewChild('tabs', { static: false })
  tabs!: IonTabs;
  user: any = [];

  constructor() {
    // this.user$ = this.store.select('user');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserName();
  }

  setCurrentTab() {
    this.selectTab = this.tabs.getSelected();
  }

  getUserName() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

}
