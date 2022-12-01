import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Buyer } from '../login/buyer';
import { Cart } from './cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemList!: Cart[];
  buyer!: Buyer;

  constructor(private service: CartService, private router: Router) { }

  ngOnInit(): void {
    this.buyer = HomeComponent.getLoggedUser();
    console.log(this.buyer.bId);
    this.getCartList(this.buyer.bId);
  }

  getCartList(buyerId: String) {
    this.service.getCartList(buyerId).subscribe(
      (data: Cart[]) => {
        this.itemList = data;
        console.log(this.itemList);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  removeFromCart(cart: Cart) {
    this.service.removeItem(cart).subscribe(
      (data: Cart) => {
        console.log(data);
        this.router.navigate(['/cart']);
        this.buyer = HomeComponent.getLoggedUser();
        this.getCartList(this.buyer.bId);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateQuantity(quantity: HTMLInputElement) {
    console.log(quantity.value);
  }

}
