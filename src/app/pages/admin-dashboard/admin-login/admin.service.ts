import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/admin-login";

  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin : Admin):Observable<Admin> {
    return this.httpClient.post<Admin>(`${this.baseURL}`, admin);
  }

}
