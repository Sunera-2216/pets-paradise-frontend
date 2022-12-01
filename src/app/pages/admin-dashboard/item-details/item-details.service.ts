import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessories } from '../../seller-dashboard/view-store/add-accessories/accessories';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private itemURL = "http://localhost:8080/api/get-all-items";

  constructor(private httpClient: HttpClient) { }

  getItemList(): Observable<Accessories[]> {
    return this.httpClient.get<Accessories[]>(`${this.itemURL}`);
  }
}
