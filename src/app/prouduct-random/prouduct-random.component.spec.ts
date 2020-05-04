import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductRandomComponent } from './prouduct-random.component';

describe('ProuductRandomComponent', () => {
  let component: ProuductRandomComponent;
  let fixture: ComponentFixture<ProuductRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuductRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
