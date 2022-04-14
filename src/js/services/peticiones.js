/**
 * archivo para peticiones fetch..
 */
//const url = 'http://192.168.1.123/api/prospectacion/procesa-datos.php';
//const url = 'https://api.unimex.edu.mx/api/prospectacion/procesa-datos.php';
const url = './php/procesa-datos.php';
//const url = 'http://192.168.1.123/dist-pros/php/procesa-datos.php';


const registraProspecto = async( datos )=>{

    if(!datos) throw 'no hay datos';

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Accept"       : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(datos)
        });
    
        if( !response.ok ) throw 'Error al enviar los datos';
        return await response.json();
        
    } catch (error) {

        throw error;
        
    }

};

const saludo = async( n )=>{
    let mensaje = `bienvenido ${n}`;
    return await mensaje;
}

export {
    registraProspecto,
    saludo,
}