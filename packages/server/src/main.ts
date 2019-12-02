import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// add start
import * as express from 'express';
import { join } from 'path';
// add end

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // add start
  app.setGlobalPrefix('api');

  app.use(express.static(join(__dirname, '..', 'client')));
  app.use('/*', express.static(join(__dirname, '..', 'client/index.html')));
  // add end

  await app.listen(3000);
}
bootstrap();
