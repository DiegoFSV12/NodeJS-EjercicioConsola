import fs from 'fs';
import { yarg } from "./config/plugins/args.plugin";
console.log(yarg.m);

let outputMessage = '';
const {m:num,l:limit,s:show} = yarg;
const headerMessage = `
====================================
Tabla del ${num}
====================================
`;

if(show){
    for(let i = 1; i<=limit; i++){
        outputMessage+=`${num} x ${i} = ${num*i}\n`;
    }
    outputMessage = headerMessage + outputMessage;
    console.log(outputMessage);


    const outputPath = 'outputs';
    fs.mkdirSync(outputPath,{recursive:true});//Crea las carpetas requeridas por outputPath
    fs.writeFileSync(`${outputPath}/tabla-${num}.txt`,outputMessage);
    console.log('Archivo creado!');
}

