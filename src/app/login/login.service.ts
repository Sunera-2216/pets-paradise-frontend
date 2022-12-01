import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from './buyer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/login";

  constructor(private httpClient: HttpClient) { }

  loginUser(buyer : Buyer):Observable<Buyer> {
    return this.httpClient.post<Buyer>(`${this.baseURL}`, buyer);
  }

}
