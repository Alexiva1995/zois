import { Injectable } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { addSignal } from '../store/signals/signals.actions';

interface Signal {
  id: number;
  name: string;
  buyLimit: number;
  sellLimit: number;
  buyStop: number;
  sellStop: number;
  stopLoss: number;
  takeProfit: number;
  image?: string;
  instructions?: string;
  dailyAverage: number;
  totalSignals: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardSignalsService {
  private signals: Signal[] = [
    {
      id: 1,
      name: 'Señal A',
      buyLimit: 1.1234,
      sellLimit: 1.2345,
      buyStop: 1.3456,
      sellStop: 1.4567,
      stopLoss: 1.5678,
      takeProfit: 1.6789,
      image: 'https://via.placeholder.com/150',
      instructions:
        'Comprar cuando alcance el Buy Limit. Vigilar el Stop Loss.',
      dailyAverage: 5,
      totalSignals: 150,
    },
    {
      id: 2,
      name: 'Señal B',
      buyLimit: 1.2234,
      sellLimit: 1.3345,
      buyStop: 1.4456,
      sellStop: 1.5567,
      stopLoss: 1.6678,
      takeProfit: 1.7789,
      image: '',
      instructions:
        'Vender en el Sell Stop y ajustar el Stop Loss si es necesario.',
      dailyAverage: 3,
      totalSignals: 90,
    },
  ];

  constructor(private store: Store<AppState>) {}

  getSignals(): Observable<Signal[]> {
    return of(this.signals);
  }

  addSignal(signal: Signal) {
    this.store.dispatch(addSignal({ signal }));
  }
}
