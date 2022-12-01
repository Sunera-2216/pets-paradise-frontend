import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessories } from './accessories';

@Injectable({
  providedIn: 'root'
})
export class AddAccessoriesService {

  private baseURL = "http://localhost:8080/api/add-item";
  private uploadURL = "http://localhost:8080/api/upload-item-image";

  constructor(private httpClient: HttpClient) { }

  addItem(item: Accessories): Observable<Accessories> {
    return this.httpClient.post<Accessories>(`${this.baseURL}`, item);
  }

  uploadItemImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadURL}`, formData);
  }
}
