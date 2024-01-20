import { Module } from '@nestjs/common';
import { SocketGateway } from './websocket.gateway';

@Module({
  imports: [],
  exports: [SocketGateway],
  providers: [SocketGateway],
})
export class WebSocketModule {}
