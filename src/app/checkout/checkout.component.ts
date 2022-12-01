import { Component, OnInit } from '@angular/core';
import { Checkout } from './checkout';
import { CheckoutService } from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkout = new Checkout();
  returnedData!: any;
  
  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
  }

  proceedCheckout() {
    this.checkout.merchant_id = "1219907";
    this.checkout.cancel_url = "";
    this.checkout.return_url = "";
    this.checkout.notify_url = "";
    this.checkout.country = "Sri Lanka";
    this.checkout.address = "fdf";
    this.checkout.amount = 1000;
    this.checkout.city = "Colombo";
    this.checkout.currency = "LKR";
    this.checkout.email = "ann@gmail.com";
    this.checkout.first_name = "Sunera";
    this.checkout.items = "abcd";
    this.checkout.last_name = "Sunilaka";
    this.checkout.order_id = "NO123";
    this.checkout.phone = "077214356";

    console.log(this.checkout);
    
    this.service.proceedCheckout(this.checkout).subscribe(
      (data: any) => {
        this.returnedData = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
