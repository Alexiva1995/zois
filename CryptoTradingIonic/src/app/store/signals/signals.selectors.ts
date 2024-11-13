import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SignalsState } from './signals.state';

export const selectSignalsState = createFeatureSelector<SignalsState>('signals');

export const selectSignals = createSelector(
  selectSignalsState,
  (state: SignalsState) => state.signals
);

export const selectLoading = createSelector(
  selectSignalsState,
  (state: SignalsState) => state.loading
);
