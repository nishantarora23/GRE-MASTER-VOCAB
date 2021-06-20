import { TestBed } from '@angular/core/testing';

import { GreappGuard } from './greapp.guard';

describe('GreappGuard', () => {
  let guard: GreappGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GreappGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
