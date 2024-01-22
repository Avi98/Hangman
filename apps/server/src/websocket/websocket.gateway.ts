import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { IncomingMessage } from 'http';
import { Socket } from 'socket.io';
import { RoomEventHandler } from './room-event-handler';
import { WordBankService } from '../word-bank/word-bank.service';

@WebSocketGateway({
  //@TODO: extract this
  cors: { origin: 'http://localhost:3001' },
  path: '/realtime',
})
export class SocketGateway implements OnGatewayConnection {
  constructor(private wordBank: WordBankService) {}

  handleConnection(socket: Socket, requestMessage: IncomingMessage) {
    const socketId = socket.id;
    console.log('MessageTransporter');
    console.log(`New connecting... socket id:`, socketId);

    RoomEventHandler.initializeRoomEventHandler(socket, this.wordBank);
  }

  handleDisconnect(socket: Socket): void {
    const socketId = socket.id;
    console.log(`Disconnection... socket id:`, socketId);
  }
}
