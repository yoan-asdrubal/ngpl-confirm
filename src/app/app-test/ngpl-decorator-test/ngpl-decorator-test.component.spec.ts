import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplDecoratorTestComponent } from './ngpl-decorator-test.component';

describe('SkeletonTestComponent', () => {
  let component: NgplDecoratorTestComponent;
  let fixture: ComponentFixture<NgplDecoratorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplDecoratorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplDecoratorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
