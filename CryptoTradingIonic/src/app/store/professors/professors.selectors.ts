import { createSelector } from '@ngrx/store';
import { ProfessorsState } from './professors.state';

export const selectProfessorsState = (state: any) => state.professors;

export const selectProfessors = createSelector(
  selectProfessorsState,
  (state: ProfessorsState) => state.professors
);
