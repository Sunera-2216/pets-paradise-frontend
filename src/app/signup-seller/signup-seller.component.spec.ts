import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSellerComponent } from './signup-seller.component';

describe('SignupSellerComponent', () => {
  let component: SignupSellerComponent;
  let fixture: ComponentFixture<SignupSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
