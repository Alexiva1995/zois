import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Professor {
  id: number;
  name: string;
  followers: number;
  dailySignalsAverage: number;
  totalSignals: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  private apiUrl = 'https://zois-back.valdusoft.com/professors';
  constructor(private http: HttpClient) {}

  private professors: Professor[] = [
    {
      id: 1,
      name: 'Profesor A',
      followers: 200,
      dailySignalsAverage: 5,
      totalSignals: 150,
    },
    {
      id: 2,
      name: 'Profesor B',
      followers: 180,
      dailySignalsAverage: 4,
      totalSignals: 120,
    },
    {
      id: 3,
      name: 'Profesor C',
      followers: 170,
      dailySignalsAverage: 3,
      totalSignals: 110,
    },
    // Agrega más datos mockeados según sea necesario
  ];

  getProfessors(): Observable<Professor[]> {
    return of(this.professors);
  }

  getProfessorDashboard(filters?: any): Observable<any> {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach((key) => {
        params = params.set(key, filters[key]);
      });
    }
    const user = localStorage.getItem('user');
    if (user) {
      const { _id } = JSON.parse(user);
      return this.http.get<any>(this.apiUrl + '/dashboard/' + _id, {
        params,
      });
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  getStudents(filters?: any): Observable<any[]> {
    let params = new HttpParams();
    if (filters) {
      Object.keys(filters).forEach((key) => {
        params = params.set(key, filters[key]);
      });
    }
    const user = localStorage.getItem('user');
    if (user) {
      const { _id } = JSON.parse(user);
      return this.http.get<any>(this.apiUrl + '/students/' + _id, {
        params,
      });
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/all');
  }
}
