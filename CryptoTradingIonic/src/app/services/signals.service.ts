import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  private apiUrl = 'http://localhost:3000/signals/';
  constructor(private http: HttpClient) {}

  getSignalsByProfessor(filters?: any): Observable<any> {
    let params = new HttpParams();

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          params = params.set(key, filters[key]);
        }
      });
    }

    const user = localStorage.getItem('user');
    if (user) {
      const { _id } = JSON.parse(user);
      return this.http.get<any>(this.apiUrl + 'by-professor' + '/' + _id, {
        params,
      });
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  getSignals(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'all');
  }

  createSignal(signalData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, signalData);
  }
}
