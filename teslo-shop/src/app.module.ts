import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT!,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true, // Carga automática de entidades registradas
      synchronize: process.env.POSTGRES_SYNC === 'true', // Sincroniza el esquema de la base de datos con las entidades (solo en desarrollo)
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
