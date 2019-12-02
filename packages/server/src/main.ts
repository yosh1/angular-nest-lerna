import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 追加 start
import * as express from 'express';
import { join } from 'path';
// 追加 end

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 追加 start
  app.setGlobalPrefix('api');

  app.use(express.static(join(__dirname, '..', 'client')));
  app.use('/*', express.static(join(__dirname, '..', 'client/index.html')));
  // 追加 end

  await app.listen(3000);
}
bootstrap();