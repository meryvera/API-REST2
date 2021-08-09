const { Router } = require('express'); //60.d
const { check } = require('express-validator'); //60.e


const { validarCampos } = require('../middlewares/validar-campos');//64.b


const { login } = require('../controllers/auth'); //60.i


const router = Router(); //60.f

router.post('/login',[ //60.g defino la ruta /login a login (fn de controller) mediante POST, pero antes valido la información con MIDDLEWARES
    check('correo', 'El correo es obligatorio').isEmail(),// 64.a   -> MIDDLEWARES
    check('password', 'La contraseña es obligatoria').not().isEmpty(),//65.a  -- MIDDLEWARES
    validarCampos //64,65.b
],login ); //si pasan las validaciones de los middlewares (check y validarCampos), entra a las fn de login



module.exports = router;