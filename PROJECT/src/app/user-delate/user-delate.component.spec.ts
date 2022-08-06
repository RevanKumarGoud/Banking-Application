import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDelateComponent } from './user-delate.component';

describe('UserDelateComponent', () => {
  let component: UserDelateComponent;
  let fixture: ComponentFixture<UserDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
