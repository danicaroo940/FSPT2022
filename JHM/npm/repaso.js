
// crear un servidor con EXPRESSSSSSSSSSS siempre para la constantes de server = express
//*
// vscode
// - npm init y te genera el packacge jSON (poner descripcion en el init );
// añadir type: module
// instalar el express como  ' npm install -S (express)' (esto es en dependencias)
// crwar archivo con el nombre del .<script>('server, app, index') y añadirlo al script (objeto del pacakge JSON);
// poner descripcion en el init 
// // importamos express from 'express' (es el paquete para  crear un servador )
// // -const server = express();
// // -ejecturar la funcion express;
// -APLICAR EL METODO LISTEN DE EXPRESS ( el puerto ( que va a ser const = port) y , una funcion (console.log ' server started on ${port});
// // const port = 3000 ( o otro numero. hay numeros de puertos reservados ) es solo para abrir un localhost:3000
// - aplicarmos los metodos use de express en tres pasos  en este ORDEN!!
//    -primer (server).use (express.json());--- te permite ver en el BODY  el objeto que pidas;
//    - server.use (middleware);--
//    -server.use ( el 'use' de las rutas; crear un archivo para las rutas genericas (routes.js)); 
//         import apiRouter from './api/router.js';
//             -abrir las rutas por las que quieres trabajar (en este caso)
//             router=Router(palabra reservada);
//             // aplicas el metodo use de Router (Router.use // router.use).... router.use ( un argumento para la ruta (/users', userfunction........))
//             para saber que rutas...funciona
//             export default router




//*