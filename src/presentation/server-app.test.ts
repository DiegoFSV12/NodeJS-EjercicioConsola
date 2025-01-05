import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import {ServerApp} from './server-app';

describe('Server App',()=>{
    test('Should create ServerApp instance',()=>{
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });
    test('Should run ServerApp with options',()=>{
        const logSpy = jest.spyOn(console,'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype,'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype,'execute');
        const options = {
            num: 2,
            limit: 10,
            show: true,
            name: 'test-filename',
            destination: 'test-destination'
        };
        ServerApp.run(options);
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('ServerApp running...');
        expect(logSpy).toHaveBeenLastCalledWith('Archivo creado!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({
            num: options.num, limit: options.limit
        });

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            fileName: options.name
        });
    });
})