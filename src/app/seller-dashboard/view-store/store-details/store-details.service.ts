import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessories } from '../add-accessories/accessories';
import { Pet } from '../add-pet/pet';

@Injectable({
  providedIn: 'root'
})
export class StoreDetailsService {

  private petsURL = "http://localhost:8080/api/get-pets-list";
  private itemsURL = "http://localhost:8080/api/get-item-list";

  constructor(private httpClient: HttpClient) { }

  getPetsList(storeId: String): Observable<Pet[]> {
    return this.httpClient.post<Pet[]>(`${this.petsURL}`, storeId);
  }

  getItemList(storeId: String): Observable<Accessories[]> {
    return this.httpClient.post<Accessories[]>(`${this.itemsURL}`, storeId);
  }
}
