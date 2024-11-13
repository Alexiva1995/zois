import { createAction, props } from '@ngrx/store';
import { Professor } from '../../services/professor.service';

export const loadProfessors = createAction('[Professors] Load Professors');
export const loadProfessorsSuccess = createAction(
  '[Professors] Load Professors Success',
  props<{ professors: Professor[] }>()
);
