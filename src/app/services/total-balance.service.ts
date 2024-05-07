import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalBalanceService {

  private apiPath: string = 'http://localhost:8080/accounts/balances';

  constructor(private http: HttpClient) { }

  getTotalBalances(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin=*'});
    return this.http.get<any>(this.apiPath, {headers: headers});
  }

}
