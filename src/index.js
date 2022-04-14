/**
 * 
 * importamos sweet alert para prueba de oprimizacion con splitChunks...
 * splitChunks: {all}.. separa los librerias importadas y las carga en un archivo vendors....
 * 
 * 
 * 
 */
import './styles.css';
 import _ from 'lodash';
 //import Swal from 'sweetalert2', add prefetch;
 import(/*webpackPrefetch: true */ 'sweetalert2');
 /**
  * carga estatica de modulos...
  * 
  * import { saludo } from './services/peticiones';
  */
 
 
 //cargadinamica
 //const mostrarMensaje = () => import( /* webpackChunkName: "peticiones" */ './services/peticiones' );
 
 
 
 const boton = document.getElementById('btn');

boton.addEventListener('click', ()=>{
     
     let n = 'Arturo';
     //lazyload modules...
     import(/*webpackChunkName: "componentes" */ './js/componentes').then( module =>{
         const mostrarMensaje = module.saludo;
 
         console.log( mostrarMensaje(n))
     });
 
})
 
