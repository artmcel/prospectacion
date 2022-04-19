import logometro from '../assets/img/logometro.png';
import logoveracruz from '../assets/img/logoveracruz.png';

export const cambioLogo = ()=>{
    
    window.addEventListener('load', ()=>{
        const urlHost     = window.location.host,
              obtenerLogo = document.querySelector('.nav'),
              htmlMetro   = `
                <a href="https://unimex.edu.mx">
                    <img id="logo" src="${logometro}" width="193" height="109" alt="Logo UNIMEX">
                </a>`,
              htmlVeracruz = `
                <a href="https://unimexver.edu.mx">
                    <img id="logo" src="${logoveracruz}" width="193" height="109" alt="Logo UNIMEX">
                </a>`;

        //console.log( urlHost );
        //cambiar el url por unimex.edu.mx para produccion...

        if(urlHost === 'localhost:8080'){
            obtenerLogo.innerHTML = htmlMetro;
        }else{
            obtenerLogo.innerHTML = htmlVeracruz;
        }
    })

}