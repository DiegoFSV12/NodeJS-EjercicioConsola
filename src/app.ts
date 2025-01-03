import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//Funcion asincrona que espera a que se ejecute la funcion main
(async()=>{
    await main();
    console.log('Finalizado');
})();

async function main(){
    const {m:num,l:limit,s:show} = yarg;
    ServerApp.run({num,limit,show});
}