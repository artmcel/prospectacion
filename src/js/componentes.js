import Swal from "sweetalert2";
import { registraProspecto } from "./service/peticiones";


const btn = document.getElementById('boton');


btn.addEventListener('click', (e)=>{
    
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
    if (!celular.value) throw alerta( celular );
    if (!telCasa.value) throw alerta( telCasa );
    if (!email.value) throw alerta( email );
    if (!carrera.value) throw alerta( carrera );
    if (!horario.value) throw alerta( horario );
    if (!periodo.value) throw alerta( periodo );
    if (!plantel.value) throw alerta( plantel );
    if (!escuela.value) throw alerta( escuela );

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
    

const validaciones = (datosProspecto)=>{
    registraProspecto( datosProspecto ).then( resp =>{
        console.log( resp.registro );
        resp.registro === true ? window.location.href = 'registro' :  console.error('no se registro');
    });
}

const alerta = ( input )=>{
    Swal.fire({
        icon: 'error',
        html: `El campo <strong>${input.name}</strong>, esta vacio.`
    })
    return false;
}

export {
    validaciones
}