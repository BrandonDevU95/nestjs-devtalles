import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // lanza un error si hay propiedades no definidas en el DTO
      transform: true, // transforma los payloads a los tipos definidos en los DTOs
      transformOptions: {
        exposeUnsetFields: false, // no expone campos no definidos en el DTO
        enableImplicitConversion: true, // habilita la conversión implícita de tipos
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
