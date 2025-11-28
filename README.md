# nestjs-devtalles

REST, TypeScript, Websockets, Autenticación, Authorización, Docker, Mongo, Postgres, TypeOrm,

# Ejecutar en desarrollo

1.- Clonar el proyecto 2. - Ejecutar

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

5.- Reconstruir la base de datos de Mongo

```
http://localhost:3000/api/v2/seed
```
