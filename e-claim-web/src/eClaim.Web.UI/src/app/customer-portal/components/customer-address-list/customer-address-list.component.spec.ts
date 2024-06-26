import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressListComponent } from './customer-address-list.component';

describe('CustomerAddressListComponent', () => {
  let component: CustomerAddressListComponent;
  let fixture: ComponentFixture<CustomerAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
