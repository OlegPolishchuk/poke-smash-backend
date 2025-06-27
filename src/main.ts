import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

import { AppModule } from './core/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 3600, // час * 3600
      },
    }),
  );

  await app.listen(process.env.APPLICATION_PORT ?? 3000);
}

bootstrap();
