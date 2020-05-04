import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBlogComponent } from './random-blog.component';

describe('RandomBlogComponent', () => {
  let component: RandomBlogComponent;
  let fixture: ComponentFixture<RandomBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
