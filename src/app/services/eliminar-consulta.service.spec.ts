import { TestBed } from '@angular/core/testing';

import { EliminarConsultaService } from './eliminar-consulta.service';

describe('EliminarConsultaService', () => {
  let service: EliminarConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
