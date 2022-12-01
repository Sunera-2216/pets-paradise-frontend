import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessoriesComponent } from './add-accessories.component';

describe('AddAccessoriesComponent', () => {
  let component: AddAccessoriesComponent;
  let fixture: ComponentFixture<AddAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
