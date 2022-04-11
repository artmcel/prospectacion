import { validaciones } from './js/componentes';
import './styles.css';

const frm = document.getElementById('formulario'),
      btn = document.getElementById('boton'),
      prospecto = [];
      
      
btn.addEventListener('click', (e)=>{
    
    
    const nombre = document.getElementById('nombre').value,
          celular = document.getElementById('celular').value,
          telCasa = document.getElementById('casa').value,
          email = document.getElementById('email').value,
          nivel = document.getElementById('nivel').value,
          carrera = document.getElementById('carrera').value,
          horario = document.getElementById('horario').value,
          periodo = document.getElementById('periodo').value,
          plantel = document.getElementById('plantel').value,
          escuela = document.getElementById('escuela').value,
          nombre2 = document.getElementById('nombre2').value,
          telefono2 = document.getElementById('telefono2').value;

    prospecto.push( ({
        
        nombre,
        celular,
        telCasa,
        email,
        nivel,
        carrera,
        horario,
        periodo,
        plantel,
        escuela,
        nombre2,
        telefono2
    }) );







    console.log( validaciones( ({prospecto}) ) );
    e.preventDefault();

})


