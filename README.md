# Proyecto prospectación

Este es el proyecto de prospectación creado con webpack v5 y un backend en php7.
El resultado final (productivo) esta diponible en el www de wamp64, /dist-prosp-update o /dist de este repo.

## Notas:
(Deprecate; recuerda que este proyecto estara disponible en ambos sitios web por lo cual en cada build productivo se tiene que cambiar el logotipo dependiendo el sitio web) -> revisar logo.js

### Recuerda revisar los updates de los modulos de node...

#### check updates
```
npm outdated
```

#### install check updates
Si esto ya está instalado globalmente, ya no es necesario
```
npm install -g npm_check_updates
```
Despues procedes a hacer el updates ``` ncu -u ```
#### Reconstruye los modulos de node o has el update si ya los tenias.
A veces es mejor el ```npm install```

```
npm update or npm install
``` 

Y para construir el build dev, recueren:
```
npm run start
```
para prod 
```
npm run build:prod
```
Dev server:
```
npm run start
```