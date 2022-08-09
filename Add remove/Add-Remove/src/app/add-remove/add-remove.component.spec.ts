import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDREMOVEComponent } from './add-remove.component';

describe('ADDREMOVEComponent', () => {
  let component: ADDREMOVEComponent;
  let fixture: ComponentFixture<ADDREMOVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDREMOVEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDREMOVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
