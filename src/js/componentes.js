import Swal from "sweetalert2";
import { registraProspecto } from "./service/peticiones";


const frm = document.getElementById('formulario'),
    btn = document.getElementById('boton'),
    nombre = document.getElementById('nombre'),
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

let prospecto = [];

btn.addEventListener('click', (e)=>{


    e.preventDefault();
    
    if (!nombre.value) throw alerta( nombre );
        prospecto.unshift( nombre.value );
    if (!celular.value) throw alerta( celular );
        prospecto.unshift( celular.value );
    if (!telCasa.value) throw alerta( telCasa );
        prospecto.unshift( telCasa.value );
    if (!email.value) throw alerta( email );
        prospecto.unshift( email.value );
        prospecto.unshift(nivel.value);
    if (!carrera.value) throw alerta( carrera );
        prospecto.unshift( carrera.value );
    if (!horario.value) throw alerta( horario );
        prospecto.unshift( horario.value );
    if (!periodo.value) throw alerta( periodo );
        prospecto.unshift( periodo.value );
    if (!plantel.value) throw alerta( plantel );
        prospecto.unshift( plantel.value );
    if (!escuela.value) throw alerta( escuela );
        prospecto.unshift( escuela.value );
    prospecto.unshift( nombre2.value );
    prospecto.unshift( telefono2.value );
        


    validaciones( prospecto );




});

const validaciones = (datosProspecto)=>{
    //console.log( ({datosProspecto}) );
    registraProspecto( datosProspecto ).then( resp =>{
        console.log( resp );
    });
}

const alerta = ( input )=>{
    //alert(`el campo ${input.name}, esta vacio`);
    Swal.fire({
        icon: 'error',
        html: `El campo <strong>${input.name}</strong>, esta vacio.`
    })
    return false;
}


export {
    validaciones
}