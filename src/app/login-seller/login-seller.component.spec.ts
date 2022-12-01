import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSellerComponent } from './login-seller.component';

describe('LoginSellerComponent', () => {
  let component: LoginSellerComponent;
  let fixture: ComponentFixture<LoginSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
