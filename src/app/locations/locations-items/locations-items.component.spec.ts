import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsItemsComponent } from './locations-items.component';

describe('LocationsItemsComponent', () => {
  let component: LocationsItemsComponent;
  let fixture: ComponentFixture<LocationsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
