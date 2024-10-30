import { TestBed } from '@angular/core/testing';

import { SubirConsultaService } from './subir-consulta.service';

describe('SubirConsultaService', () => {
  let service: SubirConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
