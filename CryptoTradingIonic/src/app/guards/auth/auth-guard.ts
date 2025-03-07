import { inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const router = inject(Router);

  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
