import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    num:number;
    limit:number;
    show:boolean;
    name:string;
    destination:string;
}

export class ServerApp{
    
    static run({num,limit,show,name,destination}:RunOptions){
        console.log('ServerApp running...');
        const table = new CreateTable().execute({num,limit});
        const wasCreated = new SaveFile().execute({
            fileContent:table,
            fileDestination:destination,
            fileName:name
        });
        if(show){console.log(table);}
        if(wasCreated){console.log('Archivo creado!');}
    }
}