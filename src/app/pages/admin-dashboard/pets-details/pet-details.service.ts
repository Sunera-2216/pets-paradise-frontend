import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../seller-dashboard/view-store/add-pet/pet';

@Injectable({
  providedIn: 'root'
})
export class PetDetailsService {

  private petsURL = "http://localhost:8080/api/get-all-pets";

  constructor(private httpClient: HttpClient) { }

  getPetsList(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.petsURL}`);
  }
}
