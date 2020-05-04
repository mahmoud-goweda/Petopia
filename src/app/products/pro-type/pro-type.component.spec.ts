import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTypeComponent } from './pro-type.component';

describe('ProTypeComponent', () => {
  let component: ProTypeComponent;
  let fixture: ComponentFixture<ProTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
