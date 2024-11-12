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

  constructor() {
    // this.user$ = this.store.select('user');
  }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectTab = this.tabs.getSelected();
  }

}
