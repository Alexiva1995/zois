import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { FilterModalComponent } from 'src/app/shared-components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  async openFilters(event: any) {
    const popover = await this.popoverCtrl.create({
      component: FilterModalComponent,
      event: event,
      translucent: true,
    });

    await popover.present();
  }
}
