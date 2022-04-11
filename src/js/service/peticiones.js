const url = 'http://192.168.1.123/api/prospectacion/procesa-datos.php';


const registraProspecto = async( datosPros )=>{

    try {
        
        //await ({ datosPros });
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept'       : 'application/json',
                'Content-type' : 'application/json'
            },
            data: JSON.stringify({
                datosPros
            })
        });
    
        if( !response.ok ) throw 'Error al enviar los datos';
    
        const respuesta = await response.json();
       console.log( respuesta );
        
    } catch (error) {

        throw error;
        
    }


    /*


    */

}













export {
    registraProspecto
}