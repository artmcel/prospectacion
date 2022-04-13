import "regenerator-runtime/runtime";
import "core-js/stable";
//import { validaciones } from './js/componentes';
import './styles.css';
/**
 * lazyload
 */
import _ from 'lodash';


import( './js/componentes' ).then( module =>{
    const valida = module.validaciones;
    valida();
})
//validaciones;


