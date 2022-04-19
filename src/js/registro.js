import (/*webpackPreload: true*/ '../styles.css');
import (/*webpackPreload: true*/ 'bootstrap/dist/css/bootstrap.min.css');

import( './logo' ).then( module =>{

    const cambiaLogo = module.cambioLogo;
    cambiaLogo();
});