import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplConfirmTestComponent } from './ngpl-confirm-test.component';

describe('SkeletonTestComponent', () => {
  let component: NgplConfirmTestComponent;
  let fixture: ComponentFixture<NgplConfirmTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplConfirmTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplConfirmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
