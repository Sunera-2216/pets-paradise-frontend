import { TestBed } from '@angular/core/testing';

import { LoginSellerService } from './login-seller.service';

describe('LoginSellerService', () => {
  let service: LoginSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
