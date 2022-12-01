import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class AddPetService {

  private baseURL = "http://localhost:8080/api/add-pet";
  private uploadURL = "http://localhost:8080/api/upload-pet-image";

  constructor(private httpClient: HttpClient) { }

  addPet(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(`${this.baseURL}`, pet);
  }

  uploadPetImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadURL}`, formData);
  }
}
