import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';
import { HomeComponent } from '../home/home.component';
import { Buyer } from '../login/buyer';
import { LoginComponent } from '../login/login.component';
import { Accessories } from '../seller-dashboard/view-store/add-accessories/accessories';
import { Pet } from '../seller-dashboard/view-store/add-pet/pet';
import { Product } from '../seller-dashboard/view-store/product';
import { ItemDetailsService } from './item-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  pet!: Pet;
  acc!: Accessories;
  petDetails!: Pet;
  accDetails!: Accessories;
  static loggedBuyer: Buyer;
  
  constructor(private service: ItemDetailsService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.pet = HomeComponent.getSelectedPet();
    //this.acc = HomeComponent.getSelectedItem();
    ItemDetailsComponent.loggedBuyer = LoginComponent.getLoggedBuyer();

    console.log(this.pet.breed);
    
    this.getPetDetails();
  }

  getPetDetails() {
    if (this.pet != null) {
      this.service.getPetDetails(this.pet.id).subscribe(
        (data: Pet) => {
          this.petDetails = data;
        }
      );

    }else if (this.acc != null) {
      this.service.getItemDetails(this.acc.id).subscribe(
        (data: Accessories) => {
          this.accDetails = data;
        }
      );
    }
    
  }

  addToCart(product: Product){
    let cartItem = new Cart();
    cartItem.product = product;
    cartItem.buyer.bId = HomeComponent.getLoggedUser().bId;
    cartItem.seller.sId = product.sellerId;

    this.cartService.addtoCart(cartItem).subscribe(
      (data: Cart) => {
        console.log(data.product.name);
        //(document.getElementById('addToCartBtn') as HTMLInputElement).textContent = "Added to cart";
        (document.getElementById('addToCartBtn') as HTMLInputElement).disabled = true;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  buyNow(pet: Pet) {
      this.router.navigate(['/checkout']);
  }

}
