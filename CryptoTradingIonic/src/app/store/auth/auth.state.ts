import { User } from './user.model';

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loading?: boolean;
  error?: null,
}

export const initialAuthState: AuthState = {
  user: null,
  isLoggedIn: false,
};
