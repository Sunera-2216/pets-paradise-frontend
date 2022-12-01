import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStoreDetailsComponent } from './admin-store-details.component';

describe('AdminStoreDetailsComponent', () => {
  let component: AdminStoreDetailsComponent;
  let fixture: ComponentFixture<AdminStoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
