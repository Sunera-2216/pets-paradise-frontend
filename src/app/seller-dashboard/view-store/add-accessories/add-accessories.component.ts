import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSellerComponent } from 'src/app/pages/login-seller/login-seller.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { Seller } from 'src/app/pages/signup-seller/seller';
import { SignupSellerComponent } from 'src/app/pages/signup-seller/signup-seller.component';
import { Store } from '../store';
import { ViewStoreComponent } from '../view-store.component';
import { Accessories } from './accessories';
import { AddAccessoriesService } from './add-accessories.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-add-accessories',
  templateUrl: './add-accessories.component.html',
  styleUrls: ['./add-accessories.component.css']
})
export class AddAccessoriesComponent implements OnInit {

  accessories = new Accessories();

  store!: Store;
  loggedSeller!: Seller;
  selectedFile!: ImageSnippet;
  public addItemForm !: FormGroup;

  constructor(private service: AddAccessoriesService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.store = ViewStoreComponent.getSelectedStore();
    this.loggedSeller = LoginSellerComponent.getLoggedSeller();

    this.addItemForm = new FormGroup({
      name: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      manufacturer: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      description: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      price: new FormControl({ value: '' }, Validators.compose([Validators.required])),
    });
  }

  addItem() {
    this.accessories.sellerId = this.loggedSeller.sId;
    this.accessories.storeId = this.store.storeId;

    this.service.addItem(this.accessories).subscribe(
      (data: Accessories) => {
        console.log(data);
        this.router.navigate(['/store-details']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadItemImage(this.selectedFile.file).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

}
