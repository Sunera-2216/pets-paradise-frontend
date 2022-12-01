import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/pages/seller-dashboard/view-store/store';

@Injectable({
  providedIn: 'root'
})
export class AdminViewstoreService {

  private baseUrl = "http://localhost:8080/api/get-stores";

  constructor(private httpClient: HttpClient) { }

  getStores(sellerId: String): Observable<Store[]> {
    return this.httpClient.post<Store[]>(`${this.baseUrl}`, sellerId);
  }
}
