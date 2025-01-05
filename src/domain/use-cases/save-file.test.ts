import {SaveFile} from './save-file.use-case';
import fs from 'fs';

describe('SaveFile',()=>{
    //Crean y borran la carpeta outputs después de cada test
    afterEach(()=>{
        const existDefault = fs.existsSync('outputs');
        if(existDefault){
            fs.rmSync('outputs',{recursive:true});
        }
        const existCustom = fs.existsSync('Custom-outputs');
        if(existCustom){
            fs.rmSync('Custom-outputs',{recursive:true});
        }
    });
    test('should save file with default values',()=>{
        const filePath = 'outputs/table.txt';
        const options = {fileContent:'test'};
        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const check = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath,{encoding:'utf-8'});
        expect(check).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });
    test('should save file with custom values',()=>{
        const options = {
            fileContent:'Custom content',
            fileDestination:'Custom-outputs/file-destination',
            fileName:'CustomName'
        }
        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;
        const check = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath,{encoding:'utf-8'});
        expect(check).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });
});