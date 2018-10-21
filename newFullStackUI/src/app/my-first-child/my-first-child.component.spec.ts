import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstChildComponent } from './my-first-child.component';

describe('MyFirstChildComponent', () => {
  let component: MyFirstChildComponent;
  let fixture: ComponentFixture<MyFirstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
