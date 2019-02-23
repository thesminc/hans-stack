import { TestBed } from '@angular/core/testing';

import { SocketLobbyService } from './socket-lobby.service';

describe('SocketLobbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketLobbyService = TestBed.get(SocketLobbyService);
    expect(service).toBeTruthy();
  });
});
