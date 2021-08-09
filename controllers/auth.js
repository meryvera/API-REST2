const { response } = require('express'); //61.a
const bcryptjs = require('bcryptjs');  //66.f

const Usuario = require('../models/usuario'); //66.c

const { generarJWT } = require('../helpers/generar-jwt'); 


const login = async(req, res = response) => {//61.b

    const { correo, password } = req.body; //66.a

    try { //66.b
      
        // Verificar si el email existe //66.d
        const usuario = await Usuario.findOne({ correo: correo }); //mi modelo tiene 1 propiedad interna llamada correo
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo salio mal'
            });
        }

        // SI el usuario está activo //66.e
        if ( !usuario.estado ) { //usuario.estado===false
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña //66.g
        const validPassword = bcryptjs.compareSync( password, usuario.password ); //
            // es comparar el passw ingresado para el login Vs el passw q ya existe en la bse de datos mediate el create
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT // 67.a
        const token = await generarJWT( usuario.id );  // la fn generarJWT la generamos en los helpers
            // lo unico que grabare en el payload del token solo sera el id del usuario
        res.json({
            usuario,
            token
        })

    } catch (error) {// 66.b este error jamas deberia ver xqe seria erro que no mapié desde BE
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}



module.exports = {
    login
}
