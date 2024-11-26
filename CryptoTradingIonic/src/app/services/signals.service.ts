import { Injectable } from '@angular/core';
import { Signal } from 'src/app/models/signal.model';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  private signals: Signal[] = [
    {
      id: 1,
      asset: 'BTC/USD',
      orderType: 'Buy',
      entryPrice: 42000,
      educator: 'John Doe',
      dateTime: new Date('2024-11-25T14:30:00'),
    },
    {
      id: 2,
      asset: 'ETH/USD',
      orderType: 'Sell',
      entryPrice: 3200,
      educator: 'Jane Smith',
      dateTime: new Date('2024-11-24T11:00:00'),
    },
    // Add more mock data as needed
  ];

  getSignals(): Signal[] {
    return this.signals;
  }

  filterSignals(
    orderType?: string,
    educator?: string,
    dateRange?: { start: Date | null; end: Date | null },
    assetSearch?: string
  ): Signal[] {
    return this.signals.filter((signal) => {
      const matchesOrderType = orderType ? signal.orderType === orderType : true;
      const matchesEducator = educator ? signal.educator === educator : true;
      const matchesDateRange =
        dateRange && dateRange.start && dateRange.end
          ? signal.dateTime >= dateRange.start && signal.dateTime <= dateRange.end
          : true;
      const matchesAsset = assetSearch
        ? signal.asset.toLowerCase().includes(assetSearch.toLowerCase())
        : true;

      return matchesOrderType && matchesEducator && matchesDateRange && matchesAsset;
    });
  }

}
