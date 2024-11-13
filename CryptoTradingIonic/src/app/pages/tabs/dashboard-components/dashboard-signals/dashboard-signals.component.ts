import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSignals } from 'src/app/store/signals/signals.actions';
import { Signal } from 'src/app/store/signals/signals.model';
import { selectSignals } from 'src/app/store/signals/signals.selectors';

@Component({
  selector: 'app-dashboard-signals',
  templateUrl: './dashboard-signals.component.html',
  styleUrls: ['./dashboard-signals.component.scss'],
})
export class DashboardSignalsComponent implements OnInit {
  signals$: Observable<Signal[]>;

  constructor(private store: Store) {
    this.signals$ = this.store.select(selectSignals);
  }

  ngOnInit(): void {
    this.store.dispatch(loadSignals());
  }
}
