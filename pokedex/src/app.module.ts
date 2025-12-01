import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config/app.config';
import { JoiValidationSchema } from './config/joi.valitacion';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidationSchema,
    }), // Esta línea carga las variables de entorno desde el archivo .env y las valida usando Joi
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }), // Sirve archivos estáticos desde la carpeta 'public'
    MongooseModule.forRoot(process.env.MONGO_URI!), // Conexión a MongoDB usando la variable de entorno
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
