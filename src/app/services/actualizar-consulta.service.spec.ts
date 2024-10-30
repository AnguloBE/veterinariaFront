import { TestBed } from '@angular/core/testing';

import { ActualizarConsultaService } from './actualizar-consulta.service';

describe('ActualizarConsultaService', () => {
  let service: ActualizarConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
