import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Signal {
  id: number;
  name: string;
  dailyAverage: number;
  totalSignals: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardSignalsService {
  // Datos de ejemplo para el mock
  private signals: Signal[] = [
    { id: 1, name: 'Señal A', dailyAverage: 5, totalSignals: 150 },
    { id: 2, name: 'Señal B', dailyAverage: 3, totalSignals: 90 },
    { id: 3, name: 'Señal C', dailyAverage: 7, totalSignals: 210 },
  ];

  getSignals(): Observable<Signal[]> {
    return of(this.signals);
  }
}
