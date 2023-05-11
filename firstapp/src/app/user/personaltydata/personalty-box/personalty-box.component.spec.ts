import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltyBoxComponent } from './personalty-box.component';

describe('PersonaltyBoxComponent', () => {
  let component: PersonaltyBoxComponent;
  let fixture: ComponentFixture<PersonaltyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltyBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
