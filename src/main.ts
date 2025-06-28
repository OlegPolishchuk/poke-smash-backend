import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RedisStore } from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { createClient } from 'redis';

import { AppModule } from './core/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Инициализация Redis клиента
  const redisClient = createClient({
    url: config.get('REDIS_URI'), // Используйте параметры подключения из конфига
  });
  await redisClient.connect().catch(console.error);

  // Инициализация хранилища сессий Redis
  // @ts-ignore
  const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'poke-redis',
  });

  // Настройка приложения
  app.setGlobalPrefix('api');

  // Парсер кук с секретом из конфига
  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  // Мидлварь для сессий
  app.use(
    session({
      secret: config.getOrThrow<string>('SESSION_SECRET'), // Секрет из переменных окружения
      resave: false,
      saveUninitialized: false, // Безопасная настройка для GDPR
      cookie: {
        secure: config.get('NODE_ENV') === 'production', // HTTPS в продакшене
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 дней вместо 3600 часов
      },
      store: redisStore, // Подключение Redis хранилища
    }),
  );

  // Запуск приложения
  const port = config.get('APPLICATION_PORT') || 3000;
  await app.listen(port);
  console.log(`Приложение запущено на порту ${port}`);
}

bootstrap().catch(console.error);
