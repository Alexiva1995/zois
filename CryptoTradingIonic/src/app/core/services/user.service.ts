import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSource = new BehaviorSubject<any | null>(null);
  currentUser = this.userSource.asObservable();

  setUser(user: any) {
    this.userSource.next(user);
  }
}
