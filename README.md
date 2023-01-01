# Products backend

BackEnd para la aplicación de Muestra de productos.

### Comenzando 🚀

Para ejecutar esta aplicación en tu maquina, necesitaras tener instalado Node en tu ordenador.

Puedes descargarla [aqui](https://nodejs.org/en/)

### Instalación 🔧

Desde la teminal crea una carpeta y dentro de ella puedes clonar el repositorio

```bash
git clone https://github.com/totobagliani/backend.git
```

Necesitas realizar la instalación de las dependencias necesarias ejecuta el comando.

```bash
npm install
```

Este proyecto utiliza variables de entorno que por seguridad no se suben a los repositorios de github, con lo que se tendrá que crear un archivo .env con las siguientes variables. Solo es copiar y pegar el siguiente código:

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

### Testing ⚙️

La aplicación contiene pruebas automatizadas realizadas bajo el test runner jest.
Se ha realizado de los dos módulos principales,el de conexión a la base de datos y el de los controladores.

Para ejecutar las pruebas, desde el terminal lanza el comando :

```bash
npm test
```

### Tecnologías 🖥

- Node para usar js fuera del navegador y usarse en un servidor
- express. Modulo / framework de Node para desarrollar el servidor.
- MongoDB / Mongoose .- Para la capa de persistencia y gestion de Datos (DB no relacionales).
- Lint - Eslint - Para estilar el código
- Prettier - Para formatear el código segun la guia de estilo

### Consideraciones en el desarrollo.

- EndPoints, segun los requisitos para la aplicacion front , los endpoints necesarios son de Lectura (read) y de escritura (create).
- La unica entidad que se ha creado es Productos. Al no haber usuarios no se implementa autorizaciones.
