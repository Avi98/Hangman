import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { WebSocketModule } from './websocket/websocket.module';
import { SocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [UserModule, WebSocketModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
