# Products backend

BackEnd para la aplicaci贸n de Muestra de productos.

### Comenzando 馃殌

Para ejecutar esta aplicaci贸n en tu maquina, necesitaras tener instalado Node en tu ordenador.

Puedes descargarla [aqui](https://nodejs.org/en/)

### Instalaci贸n 馃敡

Desde la teminal crea una carpeta y dentro de ella puedes clonar el repositorio

```bash
git clone https://github.com/totobagliani/backend.git
```

Necesitas realizar la instalaci贸n de las dependencias necesarias ejecuta el comando.

```bash
npm install
```

Este proyecto utiliza variables de entorno que por seguridad no se suben a los repositorios de github, con lo que se tendr谩 que crear un archivo .env con las siguientes variables. Solo es copiar y pegar el siguiente c贸digo:

```powershell
PORT=5000
DB_USER=TomasBagliani
DB_PASS=hola123
DB_CLUSTER=@tomascluster1.raecf.mongodb.net
DB_NAME_DEV=productsDev
DB_NAME_TEST=productsTest
DB_NAME_PROD=productsDev
```

Ahora ya puedes lanzar el proyecto con ...

```bash
npm start
```

### Testing 鈿欙笍

La aplicaci贸n contiene pruebas automatizadas realizadas bajo el test runner jest.
Se ha realizado de los dos m贸dulos principales,el de conexi贸n a la base de datos y el de los controladores.

Para ejecutar las pruebas, desde el terminal lanza el comando :

```bash
npm test
```

### Tecnolog铆as 馃枼

- Node para usar js fuera del navegador y usarse en un servidor
- express. Modulo / framework de Node para desarrollar el servidor.
- MongoDB / Mongoose .- Para la capa de persistencia y gestion de Datos (DB no relacionales).
- Lint - Eslint - Para estilar el c贸digo
- Prettier - Para formatear el c贸digo segun la guia de estilo

### Consideraciones en el desarrollo.

- EndPoints, segun los requisitos para la aplicacion front , los endpoints necesarios son de Lectura (read) y de escritura (create).
- La unica entidad que se ha creado es Productos. Al no haber usuarios no se implementa autorizaciones.
