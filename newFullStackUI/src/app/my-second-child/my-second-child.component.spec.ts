import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondChildComponent } from './my-second-child.component';

describe('MySecondChildComponent', () => {
  let component: MySecondChildComponent;
  let fixture: ComponentFixture<MySecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
