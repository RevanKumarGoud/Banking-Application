import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistionPageComponent } from './registion-page.component';

describe('RegistionPageComponent', () => {
  let component: RegistionPageComponent;
  let fixture: ComponentFixture<RegistionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
