import fs from 'fs';

let outputMessage = '';
const num:number = 5;
const headerMessage = `
====================================
Tabla del ${num}
====================================
`;

for(let i = 1; i<=10; i++){
    outputMessage+=`${num} x ${i} = ${num*i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);


const outputPath = 'outputs';
fs.mkdirSync(outputPath,{recursive:true});//Crea las carpetas requeridas por outputPath
fs.writeFileSync(`${outputPath}/tabla-${num}.txt`,outputMessage);
console.log('Archivo creado!');