import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseURL = "http://localhost:8080/api/request";
  private uploadURL = "http://localhost:8080/api/upload-request-pet-image";
 // petsList: any;

  constructor(private httpClient: HttpClient) { }

  requestPet(request: Request): Observable<Request> {
    return this.httpClient.post<Request>(`${this.baseURL}`, request);
  }

  uploadPetImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadURL}`, formData);
  }

}
