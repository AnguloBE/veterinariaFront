import { TestBed } from '@angular/core/testing';

import { ConsultaPorIdService } from './consulta-por-id.service';

describe('ConsultaPorIdService', () => {
  let service: ConsultaPorIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPorIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
