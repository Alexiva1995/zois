import { Signal } from 'src/app/store/signals/signals.model';

export interface SignalsState {
  signals: Signal[];
  loading: boolean;
  error: string | null;
}

export const initialSignalsState: SignalsState = {
  signals: [],
  loading: false,
  error: null,
};
