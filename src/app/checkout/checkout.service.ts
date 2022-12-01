import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from './checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private checkoutApiUrl = "https://sandbox.payhere.lk/pay/checkout";

  constructor(private httpClient: HttpClient) { }

  proceedCheckout(checkout: Checkout): Observable<Object> {
    return this.httpClient.post(`${this.checkoutApiUrl}`, checkout);
  }
}
