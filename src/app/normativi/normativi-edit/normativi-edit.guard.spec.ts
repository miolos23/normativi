import { TestBed } from '@angular/core/testing';

import { NormativiEditGuard } from './normativi-edit.guard';

describe('NormativiEditGuard', () => {
  let guard: NormativiEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NormativiEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
