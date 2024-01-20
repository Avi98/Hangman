import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [UserModule, SocketGateway],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
