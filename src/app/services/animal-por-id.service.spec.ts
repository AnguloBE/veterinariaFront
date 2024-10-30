import { TestBed } from '@angular/core/testing';

import { AnimalPorIdService } from './animal-por-id.service';

describe('AnimalPorIdService', () => {
  let service: AnimalPorIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalPorIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
