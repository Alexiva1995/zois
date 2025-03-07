import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    // Si el token existe, redirige a /tabs
    if (token) {
      this.router.navigate(['/tabs']);
      return false;  // Evita la carga de la ruta actual (login)
    }

    // Si no hay token, permite el acceso a la ruta actual (login)
    return true;
  }
}
