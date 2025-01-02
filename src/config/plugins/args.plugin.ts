import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(process.argv)
.option('m',{
    alias:'num',
    type:'number',
    demandOption:true,
    describe:'Multiplication table base number'
})
.option('l',{
    alias:'limit',
    type:'boolean',
    default:5,
    describe:'List the multiplication table'
})
.option('s',{
    alias:'show',
    type:'boolean',
    default:false,
    describe:'Show multiplication table on console'
})
.parseSync();