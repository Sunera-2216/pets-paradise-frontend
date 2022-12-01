import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../signup-seller/seller';

@Injectable({
  providedIn: 'root'
})
export class LoginSellerService {

  private sellerURL = "http://localhost:8080/api/seller-login";

  constructor(private httpClient: HttpClient) { }

  loginSeller(seller: Seller): Observable<Seller> {
    return this.httpClient.post<Seller>(`${this.sellerURL}`, seller);
  }
}
