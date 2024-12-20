import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { FilterModalComponent } from 'src/app/shared-components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  isDropdownOpen: boolean = false;

  signals = [
    {
      "id": 1,
      "title": "Zois - EUR/USD",
      "date": "17 Dec 10:00 AM",
      "buyLimit": "1.24000",
      "buyStop": "1.24500",
      "status": "Active",
      "openingTime": "17 Dec 10:00 AM",
      "openPrice": "1.23456",
      "takeProfit": "1.34567",
      "stopLoss": "1.12345",
      "timeFrame": "H-1",
      "lastUpdate": "17 Dec 10:00 AM",
      "isDropdownOpen": false,
      "comment": "Este signal está activo y se puede seguir."
    },
    {
      "id": 2,
      "title": "Zois - GBP/USD",
      "date": "18 Dec 02:00 PM",
      "buyLimit": "1.32000",
      "buyStop": "1.32500",
      "status": "Inactive",
      "openingTime": "18 Dec 02:00 PM",
      "openPrice": "1.31000",
      "takeProfit": "1.40000",
      "stopLoss": "1.20000",
      "timeFrame": "M-1",
      "lastUpdate": "18 Dec 02:00 PM",
      "isDropdownOpen": false,
      "comment": "Este signal está inactivo y no se puede seguir."
    },
    {
      "id": 3,
      "title": "Zois - COL/USD",
      "date": "18 Dec 02:00 PM",
      "buyLimit": "1.52000",
      "buyStop": "1.6500",
      "status": "Inactive",
      "openingTime": "18 Dec 02:00 PM",
      "openPrice": "1.31000",
      "takeProfit": "1.40000",
      "stopLoss": "1.20000",
      "timeFrame": "M-1",
      "lastUpdate": "18 Dec 02:00 PM",
      "isDropdownOpen": false,
      "comment": "Este signal está inactivo y no se puede seguir."
    }
]



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

  toggleDropdown(id: number) {
    const signal = this.signals.find((s) => s.id === id);
    if (signal) {
      signal.isDropdownOpen = !signal.isDropdownOpen;
    }
  }
}
