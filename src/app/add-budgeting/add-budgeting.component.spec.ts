import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetingComponent } from './add-budgeting.component';

describe('AddBudgetingComponent', () => {
  let component: AddBudgetingComponent;
  let fixture: ComponentFixture<AddBudgetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
