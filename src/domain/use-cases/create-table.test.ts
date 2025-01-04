import { CreateTable } from './create-table.use-case';
describe('CreateTable',()=>{
    test('should create a table with custom values',()=>{
        const options = {num:5,limit:8};
        const createTable = new CreateTable();
        const table = createTable.execute(options);
        //console.log(table);
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('5 x 1 = 5');
        expect(table).toContain('5 x 8 = 40');
    });
});