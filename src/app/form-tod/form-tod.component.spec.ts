import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTodComponent } from './form-tod.component';

describe('FormTodComponent', () => {
  let component: FormTodComponent;
  let fixture: ComponentFixture<FormTodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
