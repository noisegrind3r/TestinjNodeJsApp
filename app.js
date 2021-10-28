'use strict';

const { program } = require('commander');
const models = require('./Models/Hamsters');

//основгая функция
function RunApp(options) {
    //Если имя хомяка задано

    let answer = '';
    if (options.hamster) {
        //Если задано свойство
        if (options.property)
            answer = cells.getHamsterProperty(options.hamster, options.property);

        //Если задано действие
        if (options.action)
            answer = cells.evaluateFunction(options.hamster, options.action);

        //Если гичего не задано
        if (!options.property & !options.action)
            answer = 'params not set';
    }
    else {
        answer = 'hamster not set';
    }

    console.log(answer);

    return answer;
}

//Заведем хомяков
let cells = new models.HamstersCell();
//Хомяк обычный ест яблоки
cells.createHamster('common'    , 40 , 35, 'apple')
//Хомяк ангорский ест арбузы
cells.createHamster('angora'    , 30 , 10, 'watermelon')
//Хомяк джунгарский ест сливы
cells.createHamster('djungarian', 100, 35, 'plum')
//Дикий лесной хомяк ест бананы
cells.createHamster('wild'      , 60 , 42, 'banana')
//Хомяк резиновый ест абрикосы)
cells.createHamster('rubber'    , 54 , 40, 'apricot')

//Свойства для вызова
program
    .option('-hamster, --hamster <name>', 'hamster name')
    .option('-property, --property <property>', 'property value')
    .option('-action, --action <action>', 'call action');

//Разберем ответ
program.parse(process.argv);
const options = program.opts();

console.log(options);
RunApp(options)

module.exports = { RunApp };