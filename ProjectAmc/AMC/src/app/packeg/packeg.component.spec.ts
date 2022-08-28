import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegComponent } from './packeg.component';

describe('PackegComponent', () => {
  let component: PackegComponent;
  let fixture: ComponentFixture<PackegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
