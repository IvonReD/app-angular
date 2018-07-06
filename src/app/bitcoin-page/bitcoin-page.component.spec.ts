import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinPageComponent } from './bitcoin-page.component';

describe('BitcoinPageComponent', () => {
  let component: BitcoinPageComponent;
  let fixture: ComponentFixture<BitcoinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
