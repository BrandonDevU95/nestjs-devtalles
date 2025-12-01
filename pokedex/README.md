<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

Este proyecto es una API RESTful construida con **NestJS** y **MongoDB** que gestiona una Pokedex. Ofrece operaciones CRUD completas, paginación eficiente, validación de datos y un módulo de "Seed" para carga masiva de datos. Utiliza Docker para la base de datos y sigue las mejores prácticas de arquitectura modular y configuración de entornos.

## Project setup

1.- Clonar el proyecto

```
git clone <repository-url>
```

2. - Ejecutar

```
npm install
```

3.- Tener Nest CLI instalado de forma global

```
npm install -g @nestjs/cli
```

4- - Levantar la base de datos de MongoDB y Postgres con docker-compose

```
docker-compose up -d
```

5.- Clonar el archivo **.env.example** y renombrarlo a **.env**

6.- Configurar las variables de entorno en el archivo **.env**

7.- Levantar la aplicación en modo desarrollo

```
npm run start:dev
```

8.- Reconstruir la base de datos de Mongo

```

http://localhost:3000/api/v2/seed
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
