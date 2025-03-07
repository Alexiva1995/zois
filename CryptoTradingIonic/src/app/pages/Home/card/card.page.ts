import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  searchTerm: string = '';
  professors = [
    {
      id: 1,
      name: 'Dr. Emily Harris',
      photo: 'https://randomuser.me/api/portraits/women/50.jpg',
      lastSignal: '2024-12-15',
      followers: 300,
      dailyAverageSignals: 5,
      totalSignals: 150,
      signalData: {
        price: '6.564.30',
        marketCap: '6.421.412.77',
      },
      signals: [
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
      ],
    },
    {
      id: 2,
      name: 'Prof. John Smith',
      photo: 'https://randomuser.me/api/portraits/men/15.jpg',
      lastSignal: '2024-12-10',
      followers: 500,
      dailyAverageSignals: 8,
      totalSignals: 250,
      signalData: {
        price: '5.214.40',
        marketCap: '3.521.420.00',
      },
      signals: [
        {
          id: 5,
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
          id: 6,
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
          id: 7,
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
      ],
    },
  ];

  selectedProfessor: any;
  isModalOpen = false;
  isSecondModalOpen = false;

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  openModal(professor: any) {
    this.selectedProfessor = professor;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openSecondModal(professor: any) {
    this.selectedProfessor = professor;
    this.isSecondModalOpen = true;
  }

  closeSecondModal() {
    this.isSecondModalOpen = false;
  }
  viewStudents(name: string) {
    console.log('Filtering students by professor:', name);
    // Logic to navigate to the student view filtered by professor
  }

  toggleDropdown(id: number) {
    const signal = this.selectedProfessor.signals.find((s: any) => s.id === id);
    if (signal) {
      signal.isDropdownOpen = !signal.isDropdownOpen;
    }
  }
}
