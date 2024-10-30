import { TestBed } from '@angular/core/testing';

import { ObtenerConsultasService } from './obtener-consultas.service';

describe('ObtenerConsultasService', () => {
  let service: ObtenerConsultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerConsultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
