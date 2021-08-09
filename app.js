require('dotenv').config();
const Server = require('./models/server');


const server = new Server();



server.listen();

// (leccion139) informacion importante sobre los JWT 
// 60. (leccion140) creamos rutas de autenticacion
    // 60.a - creamos un nuevo endpoint {{url}}/api/auth/login en models/server.js
    // 60.b - luego en server/routes defino las rutas
    // 60.c - creamos nuevo archivo en routes/auth.js y vamos metiendo cositas q ya habian en routes/usuarios.js y seteamos los checks
        // aca deberia estar nuestras rutas con las referencias a nuestro controlador
// 61. Creamos controller/auth.js

// 62. Creamos los middlewares en las rutas de auth y lo ponemos coomo 2do parametro
// 63. Mando 1 body request a POST de postman:
    // Esto es 1 login valido porque ya existe esta usuarioa creado
    // {
    //   "correo":"sabi@gmail.com",
    //   "password": "123456"
    // }
    // EL response del BE: los msg se encuentran usualmente en controllers/auth.js
    // "msg": "Login okkk"

// 64. Ahora nos aseguramos de enviar esa info del postman en nuestra ruta /login, con los custom middleware    
    // primero, identifico la ruta (endpoint) a la q quiere ir el usuario 
    // segundo - middleware, valido identifico todos los posibles errores de validacion con con check y custom middlewares y express validator(?)
    // tercero - middleware, muestro todos los posibles errores de validacion con middleware/validar-campos.js
    // cuarto - middleware, ...si no pasa las validaciones, el return corta el flujo y manda el mensaje del error
    // quinto - middleware, ...si pasa las validaciones, va a NEXT y sigue el flujo.
    // sexto, una vez que pasó a NEXT el flujo, ahora si entra a las funciones de controller/auth
// 65. Hacemos lo mismo de la 64. con la contraseña
// 66. Hacemos login de usuario
// 67. Generar un JWT - instalamos npm i jsonwebtoken
// 68. Creamos el archivo generarJWT.js en los helpers
// 69. Guardamos el SECRETORPRIVATEKEY de helpers/generar-jwt.js en .env
    // este el valor de este secretorprivate... yo lo puedo setear como una contraseña larga q es mi firma para los JWT y es unica e irrepetible
// 70. una vez autenticado con el token, retorna 1 respuesta body del POST: el usuario y el token tmb  en controllers/auth
    // res.json({
      //usuario,
      //token
    //})  