import { TestBed } from '@angular/core/testing';

import { ProudctsService } from './proudcts.service';

describe('ProudctsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProudctsService = TestBed.get(ProudctsService);
    expect(service).toBeTruthy();
  });
});
