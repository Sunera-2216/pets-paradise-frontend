import { TestBed } from '@angular/core/testing';

import { AddAccessoriesService } from './add-accessories.service';

describe('AddAccessoriesService', () => {
  let service: AddAccessoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAccessoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
