import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectTab: any;
  @ViewChild('tabs',{static:false})
  tabs!: IonTabs;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectTab = this.tabs.getSelected();
  }

}
