import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
// import {
//   ConflictException,
//   ForbiddenException,
//   NotFoundException,
// } from '@nestjs/common';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: 'http://localhost:3000' } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;

  handleConnection(socket: Socket): void {
    const socketId = socket.id;
    console.log(`New connecting... socket id:`, socketId);
  }

  handleDisconnect(socket: Socket): void {
    const socketId = socket.id;
    console.log(`Disconnection... socket id:`, socketId);
  }

  @SubscribeMessage('message')
  async onParticipate(socket: Socket) {
    const socketId = socket.id;
    return 'test successfullt';
  }

  @SubscribeMessage('exchanges')
  async onMessage(socket: Socket, message: any) {
    const socketId = socket.id;
    message.socketId = socketId;
    console.log(
      'Received new message... socketId: %s, message: ',
      socketId,
      message,
    );
  }
}
