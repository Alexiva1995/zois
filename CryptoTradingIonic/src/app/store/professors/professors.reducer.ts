import { createReducer, on } from '@ngrx/store';
import * as ProfessorsActions from './professors.actions';
import { ProfessorsState, initialProfessorsState } from './professors.state';

export const professorsReducer = createReducer(
  initialProfessorsState,
  on(ProfessorsActions.loadProfessors, (state) => ({ ...state, loading: true })),
  on(ProfessorsActions.loadProfessorsSuccess, (state, { professors }) => ({
    ...state,
    professors,
    loading: false,
  }))
);
