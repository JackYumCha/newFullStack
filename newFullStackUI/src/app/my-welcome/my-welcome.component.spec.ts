import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWelcomeComponent } from './my-welcome.component';

describe('MyWelcomeComponent', () => {
  let component: MyWelcomeComponent;
  let fixture: ComponentFixture<MyWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
