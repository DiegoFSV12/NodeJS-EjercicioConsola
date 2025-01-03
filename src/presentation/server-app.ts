import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    num:number;
    limit:number;
    show:boolean;
}

export class ServerApp{
    
    static run({num,limit,show}:RunOptions){
        console.log('ServerApp running...');
        const table = new CreateTable().execute({num,limit});
        const wasCreated = new SaveFile().execute({
            fileContent:table,
            fileDestination:`outputs/table-${num}`,
            fileName:`table-${num}`
        });
        if(show){console.log(table);}
        if(wasCreated){console.log('Archivo creado!');}
    }
}