import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  signals = [
    {
      id: 1,
      title: 'Zois - EUR/USD',
      date: '17 Dec 10:00 AM',
      buyLimit: '1.24000',
      buyStop: '1.24500',
      status: 'Active',
      openingTime: '17 Dec 10:00 AM',
      openPrice: '1.23456',
      takeProfit: '1.34567',
      stopLoss: '1.12345',
      timeFrame: 'H-1',
      lastUpdate: '17 Dec 10:00 AM',
      isDropdownOpen: false,
      comment: 'Este signal está activo y se puede seguir.',
    },
    {
      id: 2,
      title: 'Zois - GBP/USD',
      date: '18 Dec 02:00 PM',
      buyLimit: '1.32000',
      buyStop: '1.32500',
      status: 'Inactive',
      openingTime: '18 Dec 02:00 PM',
      openPrice: '1.31000',
      takeProfit: '1.40000',
      stopLoss: '1.20000',
      timeFrame: 'M-1',
      lastUpdate: '18 Dec 02:00 PM',
      isDropdownOpen: false,
      comment: 'Este signal está inactivo y no se puede seguir.',
    },
    {
      id: 3,
      title: 'Zois - COL/USD',
      date: '18 Dec 02:00 PM',
      buyLimit: '1.52000',
      buyStop: '1.6500',
      status: 'Inactive',
      openingTime: '18 Dec 02:00 PM',
      openPrice: '1.31000',
      takeProfit: '1.40000',
      stopLoss: '1.20000',
      timeFrame: 'M-1',
      lastUpdate: '18 Dec 02:00 PM',
      isDropdownOpen: false,
      comment: 'Este signal está inactivo y no se puede seguir.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
