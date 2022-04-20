/**
 * 
 * importamos sweet alert para prueba de oprimizacion con splitChunks...
 * splitChunks: {all}.. separa los librerias importadas y las carga en un archivo vendors....
 * 
 * 
 * 
 */
import (/*webpackPreload: true*/ './styles.css');
import (/*webpackPreload: true*/ 'bootstrap/dist/css/bootstrap.min.css');
//import _ from 'lodash';
 //import Swal from 'sweetalert2', add prefetch;
//import(/*webpackPrefetch: true */ 'sweetalert2');
 /**
  * carga estatica de modulos...
  * 
  * import { saludo } from './services/peticiones';
  */

//const logo = () => import(/*webpackChunkName: "componentes" */  './js/componentes');

 
 
 //cargadinamica
 //const mostrarMensaje = () => import( /* webpackChunkName: "peticiones" */ './services/peticiones' );

import( './js/logo' ).then( module =>{

    const cambiaLogo = module.cambioLogo;
    cambiaLogo();
});
/**
 * importamos el modulo de forma simple para que no ejecute como funcion, sino hasta que sea llamado en el componentes.js
 * 
 */
import( /* webpackChunkName: "componentes" */ './js/componentes' );