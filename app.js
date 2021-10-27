'use strict';

const { program } = require('commander');
const models = require('./Models/Hamsters');

let cells = new models.HamstersCell();

cells.createHamster('common'    , 40 , 35, 'apple')
cells.createHamster('angora'    , 30 , 10, 'watermelon')
cells.createHamster('djungarian', 100, 35, 'plum')
cells.createHamster('wild'      , 60 , 42, 'banana')
cells.createHamster('rubber'    , 54 , 40, 'apricot')

program
    .option('-hamster, --hamster <name>', 'hamster name')
    .option('-action, --action <action>', 'property value');

program.parse(process.argv);

const options = program.opts();


console.log(cells.getHamsterProperty(options.hamster, options.action));