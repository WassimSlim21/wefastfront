import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorPredComponent } from './constructor-pred.component';

describe('ConstructorPredComponent', () => {
  let component: ConstructorPredComponent;
  let fixture: ComponentFixture<ConstructorPredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorPredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorPredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
