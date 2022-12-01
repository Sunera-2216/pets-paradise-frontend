import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseURL = "http://localhost:8080/api/addto-cart";
  private cartUrl = "http://localhost:8080/api/get-cart-list";
  private removeUrl = "http://localhost:8080/api/remove-item";

  constructor(private httpClient: HttpClient) { }

  addtoCart(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`${this.baseURL}`, cart);
  }

  getCartList(bId: String): Observable<Cart[]> {
    return this.httpClient.post<Cart[]>(`${this.cartUrl}`, bId);
  }

  removeItem(cart: Cart): Observable<Cart> {
    return this.httpClient.post<Cart>(`${this.removeUrl}`, cart);
  }
}
