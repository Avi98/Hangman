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
  cors: { origin: 'http://localhost:3000' },
  path: '/realtime',
  // transports: ['websocket'],
})
export class SocketGateway implements OnGatewayConnection {
  constructor(private wordBank: WordBankService) {}

  async handleConnection(client: Socket, requestMessage: IncomingMessage) {
    const socketId = client.id;
    console.log('MessageTransporter');
    console.log(`New connecting... socket id:`, socketId);

    await RoomEventHandler.initializeRoomEventHandler(client, this.wordBank);
  }

  handleDisconnect(socket: Socket): void {
    const socketId = socket.id;
    console.log(`Disconnection... socket id:`, socketId);
  }
}
