import { createReducer, on } from '@ngrx/store';
import * as SignalsActions from './signals.actions';
import { SignalsState, initialSignalsState } from './signals.state';

export const signalsReducer = createReducer(
  initialSignalsState,
  on(SignalsActions.loadSignals, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(SignalsActions.loadSignalsSuccess, (state, { signals }) => ({
    ...state,
    loading: false,
    signals,
  })),
  on(SignalsActions.loadSignalsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
