import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSellerComponent } from 'src/app/pages/login-seller/login-seller.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { Seller } from 'src/app/pages/signup-seller/seller';
import { SignupSellerComponent } from 'src/app/pages/signup-seller/signup-seller.component';
import { Store } from '../store';
import { ViewStoreComponent } from '../view-store.component';
import { AddPetService } from './add-pet.service';
import { Pet } from './pet';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  pet = new Pet();

  store!: Store;
  loggedSeller!: Seller;
  selectedFile!: ImageSnippet;
  public addPetForm !: FormGroup

  constructor(private service: AddPetService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.store = ViewStoreComponent.getSelectedStore();
    this.loggedSeller = LoginSellerComponent.getLoggedSeller();

    this.addPetForm = new FormGroup({
      name: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      species: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      breed: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      age: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      description: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      gender: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      price: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  addPet() {
    this.pet.sellerId = this.loggedSeller.sId;
    this.pet.storeId = this.store.storeId;
    //console.log(this.pet);
    this.service.addPet(this.pet).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/store-details']);
      },
      error => {
        console.log(error);
      }
    );
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadPetImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

}
