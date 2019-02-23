import { Component, OnInit } from '@angular/core';
import { SocketLobbyService } from './socket-lobby.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-socket-lobby',
  templateUrl: './socket-lobby.component.html',
  styleUrls: ['./socket-lobby.component.css']
})
export class SocketLobbyComponent implements OnInit {

  public socketMessage = ''; 
  public logs = [];

  constructor(private socketLobbyService: SocketLobbyService) { 

    this.socketLobbyService.onConnectionSuccess().subscribe(data => {
      console.log("Angular connected to Socket.io: ", data.status);
      this.logs.push(data.status);
    })
  }

  ngOnInit() {
  }

  sendMessage(msg) {
    this.logs.push("client - " + msg.socketMessage);
    this.socketLobbyService.sendMessage(msg);
    this.socketMessage = '';
  }

}
