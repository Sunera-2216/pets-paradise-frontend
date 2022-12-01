import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessories } from '../seller-dashboard/view-store/add-accessories/accessories';
import { Pet } from '../seller-dashboard/view-store/add-pet/pet';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private petsURL = "http://localhost:8080/api/get-pet-details";
  private itemURL = "http://localhost:8080/api/get-item-details";
  private addToCartUrl = "http://localhost:8080/api/add-to-cart";

  constructor(private httpClient: HttpClient) { }

  getPetDetails(petId: String): Observable<Pet> {
    return this.httpClient.post<Pet>(`${this.petsURL}`, petId);
  }

  getItemDetails(itemId: String): Observable<Accessories> {
    return this.httpClient.post<Accessories>(`${this.itemURL}`, itemId);
  }
}
