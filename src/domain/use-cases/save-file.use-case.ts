import fs from 'fs';//FileSystem

export interface SaveFileUseCase {
    execute: (options:Options)=>boolean;
}
export interface Options{
    fileContent:string;
    fileDestination?:string;
    fileName?:string;
}

export class SaveFile{
    constructor(){}
    execute({
        fileContent,
        fileDestination='outputs',
        fileName = 'table'
        }:Options){

        try{
            fs.mkdirSync(fileDestination,{recursive:true});//Crea las carpetas requeridas por outputPath
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,fileContent);
            return true;
        }
        catch(error){
            console.log('Error al crear el archivo');
            return false;
        }
    }
}