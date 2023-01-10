import { TestBed } from '@angular/core/testing';

import { ByIngredientsService } from './by-ingredients.service';

describe('ByIngredientsService', () => {
  let service: ByIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
