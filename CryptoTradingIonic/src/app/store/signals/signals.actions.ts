import { createAction, props } from '@ngrx/store';
import { Signal } from './signals.model';

export const loadSignals = createAction('[Signals] Load Signals');
export const loadSignalsSuccess = createAction(
  '[Signals] Load Signals Success',
  props<{ signals: Signal[] }>()
);
export const loadSignalsFailure = createAction(
  '[Signals] Load Signals Failure',
  props<{ error: string }>()
);
