import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../login/buyer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupBuyerService {

  private baseURL = "http://localhost:8080/api/create-buyer";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<Buyer[]> {
    return this.httpClient.get<Buyer[]>(`${this.baseURL}`);
  }

  // public registerUser(buyer: Buyer): Observable<Buyer> {
  //   return this.httpClient.post<Buyer>(`${this.baseURL}`, buyer);
  // }

  public validateData(buyer: Buyer): Observable<Buyer> {
    return this.httpClient.post<Buyer>(`${this.baseURL}`, buyer);
  }
}