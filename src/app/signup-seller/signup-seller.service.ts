import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class SignupSellerService {
  private baseURL = "http://localhost:8080/api/create-seller";
  // private sellerURL = "http://localhost:8080/api/seller-login";
  private uploadURL = "http://localhost:8080/api/upload-nic-front-image";
  private uploadBackImageURL = "http://localhost:8080/api/upload-nic-back-image";
  private uploadStatementURL = "http://localhost:8080/api/upload-bank-statement-image";

  constructor(private httpClient: HttpClient) { }

  registerSeller(seller: Seller): Observable<Seller> {
    return this.httpClient.post<Seller>(`${this.baseURL}`, seller);
  }

  // loginSeller(seller: Seller): Observable<Seller> {
  //   return this.httpClient.post<Seller>(`${this.sellerURL}`, seller);
  // }

  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadURL}`, formData);
  }

  public uploadBackImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadBackImageURL}`, formData);
  }

  public uploadBankImage(image: File): Observable<Object> {
    const formData = new FormData();

    formData.append('file', image);

    return this.httpClient.post(`${this.uploadStatementURL}`, formData);
  }
}
