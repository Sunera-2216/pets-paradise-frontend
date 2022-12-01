import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../seller-dashboard/view-store/add-pet/pet';
import { Product } from '../../seller-dashboard/view-store/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchURL = "http://localhost:8080/api/search-product";
  private imageSearchUrl = "http://localhost:8080/api/predict";
  private filterCatURL = "http://localhost:8080/api/filter-category";

  constructor(private httpClient: HttpClient) { }

  searchProduct(searchKeyword: string): Observable<Product[]> {
    return this.httpClient.post<Product[]>(`${this.searchURL}`, searchKeyword);
  }

  imageSearch(predictedKeyword: string): Observable<Product[]> {
    return this.httpClient.post<Product[]>(`${this.imageSearchUrl}`, predictedKeyword);
  }

  filterCategory(selectedCatMenu: string): Observable<Product[]> {
    return this.httpClient.post<Product[]>(`${this.filterCatURL}`, selectedCatMenu);
  }
}
