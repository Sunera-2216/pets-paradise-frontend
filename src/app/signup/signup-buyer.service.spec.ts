import { TestBed } from '@angular/core/testing';

import { SignupBuyerService } from './signup-buyer.service';

describe('SignupBuyerService', () => {
  let service: SignupBuyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupBuyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
