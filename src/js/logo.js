export const cambioLogo = ()=>{
    
    window.addEventListener('load', ()=>{
        const urlHost     = window.location.host,
              obtenerLogo = document.querySelector('.nav'),
              htmlMetro   = `
                <a href="https://unimex.edu.mx">
                    <img id="logo" src="assets/img/logo-metro.png" width="193" height="109" alt="Logo UNIMEX">
                </a>`,
              htmlVeracruz = `
                <a href="https://unimexver.edu.mx">
                    <img id="logo" src="assets/img/logo-veracruz.png" width="193" height="109" alt="Logo UNIMEX">
                </a>`;

        console.log( urlHost );

        if(urlHost === 'localhost:8080'){
            obtenerLogo.innerHTML = htmlMetro;
        }else{
            obtenerLogo.innerHTML = htmlVeracruz;
        }
    })

}