import { TestBed } from '@angular/core/testing';

import { CheckboxFilterService } from './checkbox-filter.service';

describe('CheckboxFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckboxFilterService = TestBed.get(CheckboxFilterService);
    expect(service).toBeTruthy();
  });
});
