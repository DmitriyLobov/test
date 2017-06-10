import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationMainPageComponent } from './calculation-main-page.component';

describe('CalculationMainPageComponent', () => {
  let component: CalculationMainPageComponent;
  let fixture: ComponentFixture<CalculationMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
