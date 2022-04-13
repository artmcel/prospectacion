import _ from 'lodash';
import { saludo } from './services/peticiones';


let n = 'Arturo';

saludo( n ).then( console.log );


export default function print(text) {
    console.log(text);
};