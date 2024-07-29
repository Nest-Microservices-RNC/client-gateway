## Client Gateway
El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios.
Es el encargado de recibir las peticiones, enviarlas a los servicios
correspondientes y devolver la respuesta al cliente.

## DEV
1. Clonar el repositorio
2. Instalar dependencias
3. Creat el archivo `.env` basado en el `.env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
5. Tener levantados los microservicios que se van a consumir
6. Levantar el proyecto con `npm run start:dev`


## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

## PROD

Ejecutar
```
docker build -f dockerfile.prod -t client-gateway .
```