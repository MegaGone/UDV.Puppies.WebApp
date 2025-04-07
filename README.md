# UDV.Puppies.WebApp

Aplicación web desarrollada con Angular para explorar distintas razas de perros, utilizando TheDogAPI como fuente de datos.

## REQUISITOS

- Node.js v16 o superior
- Angular 17 CLI instalado globalmente:
  npm install -g @angular/cli

## INSTALACIÓN Y EJECUCIÓN EN LOCAL

1. Clonar el repositorio:
   git clone https://github.com/MegaGone/UDV.Puppies.WebApp.git
   cd UDV.Puppies.WebApp

2. Instalar dependencias:
   npm install

3. Ejecutar el proyecto:
   ng serve

4. Acceder a la app:
   http://localhost:4200

## CREDENCIALES

Las credenciales por defecto se encuentran en el archivo:

src/environments/environment.development.ts

## API

- Esta app consume los datos desde TheDogAPI:
  https://www.thedogapi.com/

- Las peticiones requieren una API Key, que debe ser incluida en los headers.

- En el plan gratuito se permite un límite de 10,000 peticiones por mes.

## BUILD DE PRODUCCIÓN

Para generar el build optimizado para producción:

ng build --configuration=production
