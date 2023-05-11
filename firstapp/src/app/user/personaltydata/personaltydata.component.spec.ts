import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltydataComponent } from './personaltydata.component';

describe('PersonaltydataComponent', () => {
  let component: PersonaltydataComponent;
  let fixture: ComponentFixture<PersonaltydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaltydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
