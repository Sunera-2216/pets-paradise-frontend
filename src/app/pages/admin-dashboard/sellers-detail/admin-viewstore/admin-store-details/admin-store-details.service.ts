import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessories } from 'src/app/pages/seller-dashboard/view-store/add-accessories/accessories';
import { Pet } from 'src/app/pages/seller-dashboard/view-store/add-pet/pet';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreDetailsService {
 
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
