import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from './seller';
import { SignupSellerService } from './signup-seller.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-signup-seller',
  templateUrl: './signup-seller.component.html',
  styleUrls: ['./signup-seller.component.css']
})
export class SignupSellerComponent implements OnInit {
   static loggedSeller: Seller;
  static SignupSellerComponent: Seller;

  // static getLoggedSeller(): Seller {
  //   return this.loggedSeller;
  // }

  selectedFile!: ImageSnippet;
  seller = new Seller();

  public signupSellerForm !: FormGroup
  // public loginsellerForm !: FormGroup

  constructor(private service: SignupSellerService, private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.signupSellerForm = new FormGroup({
      sFirstName: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sLastName: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sFullName: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sAddress: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sContactNumber: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sAccountNumber: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sBank: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sBankBranch: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sEmail: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      sPassword: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });

    // this.loginsellerForm = new FormGroup({
    //   sEmail: new FormControl({ value: '' }, Validators.compose([Validators.required])),
    //   sPassword: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    // });
  }

  registerSeller() {
    this.service.registerSeller(this.seller).subscribe((data: any) => {
      console.log(data);

      if (data) {
        SignupSellerComponent.loggedSeller = data;
        this.router.navigate(['/seller-dashboard']);
      }

    },
      (error: any) => console.log(error));
  }

  // loginSeller() {
  //   this.service.loginSeller(this.seller).subscribe((data: Seller) => {
  //     console.log(data);

  //     if (data) {
  //       SignupSellerComponent.loggedSeller = data;
  //       this.router.navigate(['/seller-dashboard']);
  //     } else {
  //       (document.getElementById('loginError') as HTMLElement).textContent = "Email or password is invalid!";
  //     }

  //   },
  //     (error: any) => console.log(error));
  // }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadImage(this.selectedFile.file).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

  processBackFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadBackImage(this.selectedFile.file).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(file);
  }

  processBankFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadBankImage(this.selectedFile.file).subscribe(
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
