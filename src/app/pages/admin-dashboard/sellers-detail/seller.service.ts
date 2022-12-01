import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private baseURL = "http://localhost:8080/api/get-seller";

  constructor(private httpClient: HttpClient) { }

  getSellerList(): Observable<Seller[]>{
    return this.httpClient.get<Seller[]>(`${this.baseURL}`);
  }
}
