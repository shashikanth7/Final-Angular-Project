import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltytestComponent } from './personaltytest.component';

describe('PersonaltytestComponent', () => {
  let component: PersonaltytestComponent;
  let fixture: ComponentFixture<PersonaltytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltytestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
