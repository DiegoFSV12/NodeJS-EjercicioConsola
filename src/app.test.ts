import {ServerApp} from './presentation/server-app';


describe('App',()=>{
    test('should call Server.run with values',async()=>{
        const serverRunMock = jest.fn();
        const logMock = jest.fn();
        ServerApp.run = serverRunMock;
        console.log = logMock;
        process.argv = ['node','app.ts','-m','10','-l','15','-s','-n','testFile','-o','testDestiny'];
        await import('./app');
        expect(serverRunMock).toHaveBeenCalledWith({
            num:10,
            limit:15,
            show:true,
            name:'testFile',
            destination:'testDestiny'
        });
        expect(logMock).toHaveBeenCalledTimes(1);
    })
})