export interface CreateTableUseCase{
    execute: (option:CreateTableOtions)=> string;
}
export interface CreateTableOtions{
    num:number;
    limit:number;
}


export class CreateTable implements CreateTableUseCase{
    constructor(/*Inyección de dependencias*/){}
    execute({num,limit}:CreateTableOtions){
        let outputMessage=`
====================================
Tabla del ${num}
====================================
        \n`;
        for(let i = 1; i<=limit; i++){
            outputMessage+=`${num} x ${i} = ${num*i}\n`;
        }
        return outputMessage;
    }
}