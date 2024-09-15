import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4300/api';

  constructor(private http: HttpClient) { }

  registerStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students`, data,{'responseType':'text'as'json'});
  }
  getstudent( ): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }


  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, student);
  }



  registerMentor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mentors`, data,{'responseType':'text'as'json'});
  }

  getMatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/matches`);
  }

  scheduleSession(matchId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/schedule/${matchId}`, {});
  }
}
