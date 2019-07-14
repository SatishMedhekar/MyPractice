import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstfloorzone1Component } from './firstfloorzone1.component';

describe('Firstfloorzone1Component', () => {
  let component: Firstfloorzone1Component;
  let fixture: ComponentFixture<Firstfloorzone1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstfloorzone1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firstfloorzone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
