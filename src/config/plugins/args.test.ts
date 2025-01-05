
const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./args.plugin');
    return yarg;
}


describe('Test args.plugin.ts', () => {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });
    test('should return default values', async () => {
        const argv = await runCommand(['-m', '5']);
        expect(argv).toEqual(expect.objectContaining({
            num: 5,
            limit: 5,
            show: false,
            name: 'multiplication-table',
            destination: './outputs',
        }));
    });

    test('should return custom values', async () => {
        const argv = await runCommand(['-m', '5','-l','10','-s','-n','CustomName','-o','CustomDir']);
        expect(argv).toEqual(expect.objectContaining({
            num: 5,
            limit: 10,
            show: true,
            name: 'CustomName',
            destination: 'CustomDir',
        }));
    });
});