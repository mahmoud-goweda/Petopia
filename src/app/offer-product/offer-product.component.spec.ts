import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferProductComponent } from './offer-product.component';

describe('OfferProductComponent', () => {
  let component: OfferProductComponent;
  let fixture: ComponentFixture<OfferProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
