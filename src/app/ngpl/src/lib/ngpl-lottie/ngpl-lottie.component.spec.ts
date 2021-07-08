import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplLottieComponent } from './ngpl-lottie.component';

describe('NgplLottieComponent', () => {
  let component: NgplLottieComponent;
  let fixture: ComponentFixture<NgplLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplLottieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
