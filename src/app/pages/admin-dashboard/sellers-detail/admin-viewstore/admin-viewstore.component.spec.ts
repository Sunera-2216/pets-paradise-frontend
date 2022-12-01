import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewstoreComponent } from './admin-viewstore.component';

describe('AdminViewstoreComponent', () => {
  let component: AdminViewstoreComponent;
  let fixture: ComponentFixture<AdminViewstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
