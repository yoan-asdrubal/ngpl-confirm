import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplLottieTestComponent } from './ngpl-lottie-test.component';

describe('SkeletonTestComponent', () => {
  let component: NgplLottieTestComponent;
  let fixture: ComponentFixture<NgplLottieTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplLottieTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplLottieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
