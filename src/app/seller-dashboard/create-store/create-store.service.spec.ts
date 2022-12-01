import { TestBed } from '@angular/core/testing';

import { CreateStoreService } from './create-store.service';

describe('CreateStoreService', () => {
  let service: CreateStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
