import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../../login/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseURL = "http://localhost:8080/api/get-buyer";

  constructor(private httpClient: HttpClient) { }

  getBuyerList(): Observable<Buyer[]>{
    return this.httpClient.get<Buyer[]>(`${this.baseURL}`);
  }
}
