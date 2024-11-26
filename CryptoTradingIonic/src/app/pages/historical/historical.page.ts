import { Component } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.page.html',
  styleUrls: ['./historical.page.scss'],
})
export class HistoricalPage {

  signals = [
    {
      id: 1,
      asset: 'BTC/USD',
      orderType: 'buy',
      entryPrice: 42000,
      educator: 'John Doe',
      dateTime: new Date('2024-11-25T14:30:00'),
    },
    {
      id: 2,
      asset: 'ETH/USD',
      orderType: 'sell',
      entryPrice: 3200,
      educator: 'Jane Smith',
      dateTime: new Date('2024-11-24T11:00:00'),
    },
  ];

  filters = {
    asset: '',
    orderType: '',
    educator: '',
    dateRange: {
      start: null,
      end: null,
    },
  };

  minDate = '2020-01-01';
  maxDate = '2025-12-31';

  educators = ['John Doe', 'Jane Smith'];
  filteredSignals = [...this.signals];

  updateDateRange(event: any) {
    this.filters.dateRange.start = event.detail.value.start;
    this.filters.dateRange.end = event.detail.value.end;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredSignals = this.signals.filter((signal) => {
      const matchesAsset =
        !this.filters.asset ||
        signal.asset.toLowerCase().includes(this.filters.asset.toLowerCase());
      const matchesOrderType =
        !this.filters.orderType || signal.orderType === this.filters.orderType;
      const matchesEducator =
        !this.filters.educator || signal.educator === this.filters.educator;

      const matchesDateRange =
        (!this.filters.dateRange.start ||
          new Date(signal.dateTime) >= new Date(this.filters.dateRange.start)) &&
        (!this.filters.dateRange.end ||
          new Date(signal.dateTime) <= new Date(this.filters.dateRange.end));

      return matchesAsset && matchesOrderType && matchesEducator && matchesDateRange;
    });
  }
}
