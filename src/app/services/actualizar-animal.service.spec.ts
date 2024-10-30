import { TestBed } from '@angular/core/testing';

import { ActualizarAnimalService } from './actualizar-animal.service';

describe('ActualizarAnimalService', () => {
  let service: ActualizarAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
