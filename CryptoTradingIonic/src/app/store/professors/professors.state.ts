import { Professor } from 'src/app/services/professor.service';

export interface ProfessorsState {
  professors: Professor[];
  loading: boolean;
}

export const initialProfessorsState: ProfessorsState = {
  professors: [],
  loading: false,
};
