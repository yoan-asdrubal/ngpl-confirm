import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplAlertAreaComponent } from './ngpl-alert-area.component';

describe('AlertAreaComponent', () => {
  let component: NgplAlertAreaComponent;
  let fixture: ComponentFixture<NgplAlertAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgplAlertAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplAlertAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
