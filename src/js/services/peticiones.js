import _ from 'lodash';

export const saludo = async( nombre )=>{
    return _.join([
        
        `bienvenido: ${nombre}`,
        'cargando archivo peticiones'
    ])
}