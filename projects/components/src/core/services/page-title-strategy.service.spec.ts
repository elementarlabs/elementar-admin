import { TestBed } from '@angular/core/testing';

import { PageTitleStrategyService } from './page-title-strategy.service';

describe('PageTitleStrategyService', () => {
  let service: PageTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
