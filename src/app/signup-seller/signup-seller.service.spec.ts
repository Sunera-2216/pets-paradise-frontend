import { TestBed } from '@angular/core/testing';

import { SignupSellerService } from './signup-seller.service';

describe('SignupSellerService', () => {
  let service: SignupSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
