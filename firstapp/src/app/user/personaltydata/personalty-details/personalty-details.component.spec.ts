import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltyDetailsComponent } from './personalty-details.component';

describe('PersonaltyDetailsComponent', () => {
  let component: PersonaltyDetailsComponent;
  let fixture: ComponentFixture<PersonaltyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
