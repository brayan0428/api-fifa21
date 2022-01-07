# Descripción del Proyecto

### Tecnologias utilizadas

Para la construcción de esta aplicación se utilizo NodeJs, Express y como base de datos se utilizo MongoDB.

### Ejecución de la app

Para ejecutar la aplicación se debera abrir una consola y situarse dentro de la carpeta del proyecto. La primera vez debemos utilizar el comando `npm install` para instalar todas las dependencias del proyecto. Una vez se hayan instalado todas las dependencias, procedemos a ejecutar el comando `npm start` y la aplicación sera desplegada en la ruta local http://localhost:3001 (Se debe tener un archivo .ENV configurado con la variable de entorno PORT la cual indica el puerto y con la variable MONGO_URI la cual indica la cadena de conexión a MongoDB)

### Funcionamiento de la Aplicación

La API cuenta con 3 endpoints los cuales se describen a continuación:

- /api/v1/script: Este endpoint es de tipo GET y se encarga de conectarse a la API de fifa 21 y obtener los datos de los jugadores para posteriormente guardarlos en la base de datos de MongoDB
- /api/v1/team: Este endpoint es de tipo POST y se encarga de obtener los nombres de jugadores que pertencen a un equipo enviado por parametros. Los parametros se le deben enviar por el body de la petición y se recibe el parametro name el cual corresponde al nombre del equipo y el parametro page el cual corresponde a la pagina que queremos ver. Los registros son paginados de 12 en 12
- /api/v1/players: Este endpoint es de tipo GET y se encarga de consultar todos los jugadores que su nombre coincida con un parametro enviado. Los parametros se envian por la url bajo el nombre de search, tambien recibe otro parametro de nombre page que corresponde a la pagina que se desea ver y por ultimo recibe el parametro order, el cual acepta los valores de asc y desc, para el ordenamiento alfabetico de los resultados
