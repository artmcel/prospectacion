/**
 * 
 * importamos sweet alert para prueba de oprimizacion con splitChunks...
 * splitChunks: {all}.. separa los librerias importadas y las carga en un archivo vendors....
 * 
 * 
 * 
 */
import './styles.css';
//import _ from 'lodash';
 //import Swal from 'sweetalert2', add prefetch;
//import(/*webpackPrefetch: true */ 'sweetalert2');
 /**
  * carga estatica de modulos...
  * 
  * import { saludo } from './services/peticiones';
  */
 
 
 //cargadinamica
 //const mostrarMensaje = () => import( /* webpackChunkName: "peticiones" */ './services/peticiones' );
import( './js/componentes' ).then( module =>{
    const valida = module.validaciones;
    valida();


})