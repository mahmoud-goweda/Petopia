import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleProductComponent } from './signle-product.component';

describe('SignleProductComponent', () => {
  let component: SignleProductComponent;
  let fixture: ComponentFixture<SignleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
