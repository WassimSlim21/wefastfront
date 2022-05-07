import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitstopsComponent } from './pitstops.component';

describe('PitstopsComponent', () => {
  let component: PitstopsComponent;
  let fixture: ComponentFixture<PitstopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitstopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PitstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
