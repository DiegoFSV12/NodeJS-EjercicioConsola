import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import {ServerApp} from './server-app';

describe('Server App',()=>{
    const options = {
        num: 2,
        limit: 10,
        show: true,
        name: 'test-filename',
        destination: 'test-destination'
    };
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    test('Should create ServerApp instance',()=>{
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });
    /*test('Should run ServerApp with options',()=>{
        const logSpy = jest.spyOn(console,'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype,'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype,'execute');
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
    });*/
    test('should run with custom values mocked',()=>{
        //Funcion para saber si se llamo esta función
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');//Las funciones se ejecutan individualmente por lo que debemos retornar algo para que en el save no quede como undefined
        const saveFileMock = jest.fn().mockReturnValue(true)//Supongamos que retorna true, osea que si se creo el archivo;
        //Vincular los Mock
        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        ServerApp.run(options);
        expect(logMock).toHaveBeenCalledWith('ServerApp running...');
        expect(createMock).toHaveBeenCalledWith({num: options.num, limit: options.limit});
        //Se retorno 1x2=2 como indicamos al crear el mock
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            fileName: options.name
        });
        //Retorna true, el archivo fue creado
        expect(logMock).toHaveBeenCalledWith('Archivo creado!');
        expect(logErrorMock).not.toBeCalledWith();
        //No se llamo ninguna vez el logErrorMock, es decir que no hubieron errores
    });
})