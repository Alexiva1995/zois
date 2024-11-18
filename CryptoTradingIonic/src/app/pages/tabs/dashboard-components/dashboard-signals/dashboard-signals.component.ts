import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardSignalsService } from 'src/app/services/dashboard-signals.service';
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
  isModalOpen: boolean = false;

  constructor(
    private store: Store,
    private readonly signalService: DashboardSignalsService
  ) {
    this.signals$ = this.store.select(selectSignals);
  }

  ngOnInit(): void {
    this.store.dispatch(loadSignals());
  }

  openAddSignalModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleSignalAdded(signal: any) {
    console.log(signal)
    // this.signalService.addSignal(signal);
    this.closeModal();
  }
}
