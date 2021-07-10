import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplAlertTestComponent } from './ngpl-alert-test.component';

describe('SkeletonTestComponent', () => {
  let component: NgplAlertTestComponent;
  let fixture: ComponentFixture<NgplAlertTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplAlertTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplAlertTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
