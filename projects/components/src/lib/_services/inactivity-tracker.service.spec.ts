import { TestBed } from '@angular/core/testing';

import { InactivityTrackerService } from './inactivity-tracker.service';

describe('InactivityTrackerService', () => {
  let service: InactivityTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InactivityTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
