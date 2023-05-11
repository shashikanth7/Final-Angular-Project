import { TestBed } from '@angular/core/testing';

import { PersonaltytypeService } from './personaltytype.service';

describe('PersonaltytypeService', () => {
  let service: PersonaltytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaltytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
