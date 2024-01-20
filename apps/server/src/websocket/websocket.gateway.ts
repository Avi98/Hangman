import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  //@TODO: extract this
  cors: { origin: 'http://localhost:3000' },
  path: '/realtime',
})
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
  onParticipate(@ConnectedSocket() socket: Socket, @MessageBody() data: any) {
    const socketId = socket.id;
    console.log({ serverListern: data });

    setTimeout(() => {
      console.log('sending emit......', socketId);

      // socket.to(socketId).emit(
      //   'message',
      //   {
      //     data: 'serveer emited data to client',
      //   },
      //   (data) => console.log({ dataSEndToClinetAck: data }),
      // );
    }, 100);
  }

  @SubscribeMessage('SendOnClick')
  sendEvent(clinet: Socket, data) {
    console.log({ serverDataOnClick: data });
    clinet.emit('testServerMessage', { data: 'server Message' }, (data) =>
      console.log({ sent: data }),
    );
  }
  // @SubscribeMessage('exchanges')
  // async onMessage(socket: Socket, message: any) {
  //   const socketId = socket.id;
  //   message.socketId = socketId;
  //   console.log(
  //     'Received new message... socketId: %s, message: ',
  //     socketId,
  //     message,
  //   );
  // }
}
