import {SaveFile} from './save-file.use-case';
import fs from 'fs';

describe('SaveFile',()=>{
    //Crean y borran la carpeta outputs después de cada test
    afterEach(()=>{
        fs.rmSync('outputs',{recursive:true});
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
});