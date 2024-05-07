import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';
import { environment } from '../../environments/environment';
import { Customers } from '../model/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.baseApi;
  private apiUrl: string = `${this.baseUrl}/customers`;

  constructor(private http: HttpClient) { }

  createCustomer(request: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin=*'});
    return this.http.post<any>(this.apiUrl, request, {headers: headers});
  }

  getCustomers(): Observable<Customers> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin=*'});
    return this.http.get<Customers>(this.apiUrl, {headers: headers});
  }

  getCustomerStatement(customerId: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin=*'});
    return this.http.get<Customers>(`${this.apiUrl}/${customerId}/accounts`, {headers: headers});
  }
}
