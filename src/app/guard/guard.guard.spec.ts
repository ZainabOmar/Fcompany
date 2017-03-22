import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './guard.guard';

describe('GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  // it('should ...', inject([GuardGuard], (guard: GuardGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
