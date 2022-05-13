import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Socket as io }  from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: any;

  constructor(public apiService: ApiService) { }
//   setupSocketConnection() {
//     this.socket = new io('http://localhost:3000');
//     this.socket.emit('my message', JSON.parse(localStorage.getItem('account')).userName + 'is connected');
//     this.socket.on('my broadcast', (data: string) => {
//       console.log(data);
//     });
// /*
//     this.socket = io(environment.SOCKET_ENDPOINT, {
//       query: {
//         token: 'cde'
//       }
//     });
// */
//   }



}
