
# Bloc de notas

Consta de un bloc donde podras ir creando notas importantes que necesites recordar o anotar en algun lado, es una aplicación simple que te podra ayudar a tener presente esas cosas que necesitas recordar dia a dia.




# Server

Para el server tendras que seguir los siguientes pasos.

```bash
  cd Server/
```

## Instalacion de dependencias

Para la instalación de devDependencies y dependencies se ejecuta con el siguiente comando.

```bash
  npm install
```

## Para ejecutarlo en modo desarrollo

Despues de instalar las dependencias, podras utilizar este comando para correr en entorno de desarrollo

```bash
  npm run dev
```
## Para escuchar los cambios de los archivos ts

Para ir transpilando el codigo de ts a js a medida que se van guardando los cambios se utiliza el siguiente comando.

```bash
  npx tsc --watch
```
## Ruta global

    host/api/v1

## Endpoints

Los endpoints utilizados se conformar con 3 elementos

    RutaGlobal/nombreArchivo/endPoint

## .env

En el directorio raiz deberas tener la siguiente variable de entorno:



    PORT = numero de puerto donde vas a correr el server

# Client

Para el client tendras que seguir los siguientes pasos.

```bash
  cd Client/
```

## Instalacion de dependencias

Para la instalación de devDependencies y dependencies se ejecuta con el siguiente comando.

```bash
  npm install
```

## Para ejecutarlo en modo desarrollo

Despues de instalar las dependencias, podras utilizar este comando para correr en entorno de desarrollo

```bash
  npm start
```

## .env

En el directorio raiz deberas tener la siguiente variable de entorno:



    REACT_APP_URL_SERVER = "ruta global con el host y puerto donde se esta corriendo el server"

    