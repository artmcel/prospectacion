//import Swal from "sweetalert2";
//let Swal = import(/*webpackPrefetch: true*/ 'sweetalert2');
//import { registraProspecto } from "./services/peticiones";
const btn = document.getElementById('boton');

btn.addEventListener('click', (e)=>{

    e.preventDefault();
    
    const nombre = document.getElementById('nombre'),
        celular = document.getElementById('celular'),
        telCasa = document.getElementById('casa'),
        email = document.getElementById('email'),
        nivel = document.getElementById('nivel'),
        carrera = document.getElementById('carrera'),
        horario = document.getElementById('horario'),
        periodo = document.getElementById('periodo'),
        plantel = document.getElementById('plantel'),
        escuela = document.getElementById('escuela'),
        nombre2 = document.getElementById('nombre2'),
        telefono2 = document.getElementById('telefono2');
        
    if (!nombre.value) throw alerta( nombre );
    e.preventDefault();
    if (!celular.value) throw alerta( celular );
    e.preventDefault();
    if (!telCasa.value) throw alerta( telCasa );
    e.preventDefault();
    if (!email.value) throw alerta( email );
    e.preventDefault();
    if (!carrera.value) throw alerta( carrera );
    e.preventDefault();
    if (!horario.value) throw alerta( horario );
    e.preventDefault();
    if (!periodo.value) throw alerta( periodo );
    e.preventDefault();
    if (!plantel.value) throw alerta( plantel );
    e.preventDefault();
    if (!escuela.value) throw alerta( escuela );
    e.preventDefault();

    let prospecto = {
        
        'nombre' : nombre.value,
        'celular' : celular.value,
        'telCasa' : telCasa.value,
        'email' : email.value,
        'nivel' : nivel.value,
        'carrera' : carrera.value,
        'horario' : horario.value,
        'periodo' : periodo.value,
        'plantel' : plantel.value,
        'escuela' : escuela.value,
        'nombre2' : nombre2.value,
        'telefono2' : telefono2.value
    }

    validaciones( prospecto );

});
    
const validaciones = async(datosProspecto)=>{
    //importacion dinamica de modulos...
    await import(/* webpackChunkName "peticiones" */ './services/peticiones').then( module =>{
        const enviarDatos = module.registraProspecto;

        enviarDatos(datosProspecto).then( resp => {

            resp.registro === true ? window.location.href = 'registro.html' :  console.error('no se registro');

        })
    })
    /* version anterior
    registraProspecto( datosProspecto ).then( resp =>{
        console.log( resp.registro );
        resp.registro === true ? window.location.href = 'registro.html' :  console.error('no se registro');
    });
    */
}

const alerta = ( input )=>{
    import(/*webpackPrefetch: true*/ 'sweetalert2').then( module =>{
        const alerta = module.default;

        alerta.fire({
            icon: 'error',
            html: `El campo <strong>${input.name}</strong>, esta vacio.`
        })
        return false;
    })
    /*
    Swal.fire({
        icon: 'error',
        html: `El campo <strong>${input.name}</strong>, esta vacio.`
    })
    return false;
    */
}

export {
    validaciones
}