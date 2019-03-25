import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarycomputeComponent } from './salarycompute.component';

describe('SalarycomputeComponent', () => {
  let component: SalarycomputeComponent;
  let fixture: ComponentFixture<SalarycomputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarycomputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarycomputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
