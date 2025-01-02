import { yarg } from "./config/plugins/args.plugin";

//console.log(process.argv);
//console.log(yarg);

//Funcion asincrona que espera a que se ejecute la funcion main
(async()=>{
    await main();
    console.log('Finalizado');
})();

async function main(){
    console.log('Main Ejecutado');
    console.log(yarg);
}