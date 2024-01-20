import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(ConfigService);
  app.enableCors({
    //TODO remove in prod
    origin: ['http://localhost:3000'],
  });
  const serverConfig = appConfig.get('BE_PORT') || '3030';
  await app.listen(serverConfig);
  console.log('BE server running on port ', serverConfig);
}
bootstrap();
