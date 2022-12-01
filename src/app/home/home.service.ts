import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pet } from '../seller-dashboard/view-store/add-pet/pet';
import { Accessories } from '../seller-dashboard/view-store/add-accessories/accessories';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private petsURL = "http://localhost:8080/api/get-all-pets";
  private itemURL = "http://localhost:8080/api/get-all-items";
  private imageUrl = "http://127.0.0.1:5000";

  constructor(private httpClient: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.petsURL}`);
  }

  getAllItems(): Observable<Accessories[]> {
    return this.httpClient.get<Accessories[]>(`${this.itemURL}`);
  }

  predict(image: File): Observable<string> {
    const formData = new FormData();

    formData.append('imagefile', image);

    return this.httpClient.post(`${this.imageUrl}`, formData, {responseType: 'text'});
  }

}
