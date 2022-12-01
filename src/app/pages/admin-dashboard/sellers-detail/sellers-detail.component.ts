import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../../seller-dashboard/view-store/store';
import { StoreService } from '../../seller-dashboard/view-store/store.service';
import { Seller } from './seller';
import { SellerService } from './seller.service';

@Component({
  selector: 'app-sellers-detail',
  templateUrl: './sellers-detail.component.html',
  styleUrls: ['./sellers-detail.component.css']
})
export class SellersDetailComponent implements OnInit {
  seller: Seller[] = [];
  static selectedSeller: Seller;
  static SellersDetailComponent: Seller;
  store: Store[] = [];
  static selectedStore: Store;


  static getSellectedSeller(): Seller {
    return this.selectedSeller;
  }

  constructor(private sellerService: SellerService, private router: Router,private storeService: StoreService) { }

  ngOnInit(): void {
    this.getSeller();
  }

  onClick(seller: Seller){
    SellersDetailComponent.selectedSeller = seller;
    this.router.navigate(['/admin-viewstore']);
  }
  
  private getSeller(){
    this.sellerService.getSellerList().subscribe(data =>{
      this.seller = data;
    })
  }
}
