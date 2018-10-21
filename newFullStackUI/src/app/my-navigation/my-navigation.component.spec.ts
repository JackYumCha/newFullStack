import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavigationComponent } from './my-navigation.component';

describe('MyNavigationComponent', () => {
  let component: MyNavigationComponent;
  let fixture: ComponentFixture<MyNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
