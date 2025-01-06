import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signal } from 'src/app/models/signal.model';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  private apiUrl = 'http://localhost:3000/signals/';
  constructor(private http: HttpClient) {}
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
      const matchesOrderType = orderType
        ? signal.orderType === orderType
        : true;
      const matchesEducator = educator ? signal.educator === educator : true;
      const matchesDateRange =
        dateRange && dateRange.start && dateRange.end
          ? signal.dateTime >= dateRange.start &&
            signal.dateTime <= dateRange.end
          : true;
      const matchesAsset = assetSearch
        ? signal.asset.toLowerCase().includes(assetSearch.toLowerCase())
        : true;

      return (
        matchesOrderType && matchesEducator && matchesDateRange && matchesAsset
      );
    });
  }


  getSignalsByProfessor(filters?: any): Observable<any> {
    let params = new HttpParams();

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          params = params.set(key, filters[key]);
        }
      });
    }

    const user = localStorage.getItem('user');
    if (user) {
      const { _id } = JSON.parse(user);
      return this.http.get<any>(this.apiUrl + 'by-professor'+ '/' + _id, { params });
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  createSignal(signalData: any): Observable<any> {

    return this.http.post(`${this.apiUrl}`, signalData);
  }
}
