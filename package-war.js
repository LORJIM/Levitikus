 /*este script genera el WAR, se ejecuta con el comando "build-war" que establecemos en el package.json, justo despues de generar el dist*/
const zipper = require('zip-a-folder')
zipper.zip('dist/', 'Levitikus.war') //nombre del war, que debe coincidir con el publicPath de vue.config.js, para que el enrutamiento de la app funcione bien en el JBoss
.then(console.log('war file created successfully'))
.catch(error => console.log(error))