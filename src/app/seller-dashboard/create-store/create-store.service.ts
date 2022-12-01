import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../view-store/store';

@Injectable({
  providedIn: 'root'
})
export class CreateStoreService {

  private baseURL = "http://localhost:8080/api/create-store";


  constructor(private httpClient: HttpClient) { }

 public createStore(store: Store): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, store);
  }
  
}
