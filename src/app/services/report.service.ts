import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Report } from '../model/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = environment.baseApi;
  private apiUrl = `${this.baseUrl}/transactions/reports`;

  constructor(private http: HttpClient) { }

  getReport(): Observable<Report> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin=*'});
    return this.http.get<Report>(this.apiUrl, {headers: headers});
  }
}
