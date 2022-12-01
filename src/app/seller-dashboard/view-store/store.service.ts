import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseURL = "http://localhost:8080/api/get-stores";

  constructor(private httpClient: HttpClient) { }

  getStoreList(sellerId: String): Observable<Store[]> {
    return this.httpClient.post<Store[]>(`${this.baseURL}`, sellerId);
  }

}
