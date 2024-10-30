import { TestBed } from '@angular/core/testing';

import { ClientePorIdService } from './cliente-por-id.service';

describe('ClientePorIdService', () => {
  let service: ClientePorIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePorIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
