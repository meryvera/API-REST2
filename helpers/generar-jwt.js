const jwt = require('jsonwebtoken'); //68.a



const generarJWT = ( uid = '' ) => {//68.b
    //a la hroa de llamar esta fn en controller/auth recibo el argumento(usuario.id) qe caragra al payload
    // ...x ello esta fn generalJWT acá debe tener tmb el parametro uid(en string para q siempre sea asi si no lo mandaran), q es el identificador del usuario
    return new Promise( (resolve, reject) => { //68.c
        //debe ir si o si return de la promesa xqe sino en la fn donde sta seteado el token (67.a) controllers/auth.js
        // ... el await no funcionará
        
        const payload = { uid }; //68.d acá puedo enviar tmb otros datos tipo mail, etc pero mejor solo uid y PUNTO

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, { //69 Seteamos la firma
            // el sign acepta 2 parametros: el payload y el secretorprivatekey, 
            // ...que es1 llave secreta q si alguien la llega a conocer podremos firmar tokens como si yo hubiera firmado...
            // .. x ello esto tmb va en las variables de entorno 

            expiresIn: '4h' // 69.a tiempo de expiracion del JWT
        }, ( err, token ) => { // 69.b le pasamos 1 fn cb con parametros (err, token) al sign()

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token ); // si todo sale bien, la fn cb retorna 1 resolve con el token como respuesta
            }
        })

    })
}




module.exports = {
    generarJWT
}

