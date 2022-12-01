import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../../home/buyer-request/request';

@Injectable({
  providedIn: 'root'
})
export class ViewRequestService {

  private baseURL = "http://localhost:8080/api/get-request";

  constructor(private httpClient: HttpClient) { }

  getRequestList(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(`${this.baseURL}`);
  }
}
