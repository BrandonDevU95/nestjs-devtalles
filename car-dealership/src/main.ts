import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // lanza un error si hay propiedades no definidas en el DTO
      transform: true, // transforma las entradas al tipo definido en el DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
