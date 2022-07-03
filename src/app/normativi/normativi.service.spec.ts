import { TestBed } from '@angular/core/testing';

import { NormativiService } from './normativi.service';

describe('NormativiService', () => {
  let service: NormativiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormativiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
