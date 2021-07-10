import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplAlertComponent } from './ngpl-alert.component';

describe('AlertComponent', () => {
  let component: NgplAlertComponent;
  let fixture: ComponentFixture<NgplAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgplAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
