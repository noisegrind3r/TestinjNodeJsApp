'use strict';

const { program } = require('commander');
const models = require('./Models/Hamsters');

//�������� �������
function RunApp(options) {
    //���� ��� ������ ������

    let answer = '';
    if (options.hamster) {
        //���� ������ ��������
        if (options.property)
            answer = cells.getHamsterProperty(options.hamster, options.property);

        //���� ������ ��������
        if (options.action)
            answer = cells.evaluateFunction(options.hamster, options.action);

        //���� ������ �� ������
        if (!options.property & !options.action)
            answer = 'params not set';
    }
    else {
        answer = 'hamster not set';
    }

    console.log(answer);

    return answer;
}

//������� �������
let cells = new models.HamstersCell();
//����� ������� ��� ������
cells.createHamster('common'    , 40 , 35, 'apple')
//����� ��������� ��� ������
cells.createHamster('angora'    , 30 , 10, 'watermelon')
//����� ����������� ��� �����
cells.createHamster('djungarian', 100, 35, 'plum')
//����� ������ ����� ��� ������
cells.createHamster('wild'      , 60 , 42, 'banana')
//����� ��������� ��� ��������)
cells.createHamster('rubber'    , 54 , 40, 'apricot')

//�������� ��� ������
program
    .option('-hamster, --hamster <name>', 'hamster name')
    .option('-property, --property <property>', 'property value')
    .option('-action, --action <action>', 'call action');

//�������� �����
program.parse(process.argv);
const options = program.opts();

console.log(options);
RunApp(options)

module.exports = { RunApp };