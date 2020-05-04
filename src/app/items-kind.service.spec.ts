import { TestBed } from '@angular/core/testing';

import { ItemsKindService } from './items-kind.service';

describe('ItemsKindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsKindService = TestBed.get(ItemsKindService);
    expect(service).toBeTruthy();
  });
});
