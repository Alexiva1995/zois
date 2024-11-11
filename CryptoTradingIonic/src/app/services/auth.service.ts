import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    // Simulando una respuesta exitosa de login
    return of(email === 'ramonfigueroa@valdusoft.com' && password === '12345678');
  }

  register(email: string, password: string): Observable<boolean> {
    // Simulando una respuesta exitosa de registro
    return of(true);
  }
}
