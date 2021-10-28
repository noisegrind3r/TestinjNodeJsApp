//����� �������
class HamstersCell {

    constructor() {

        this.hamsters = {};
    }

    createHamster(name, volume, speed, food) {
        // ������� ������
        let hamster = new Hamster(name, volume, speed, food);
        // ���������� � ������
        this.hamsters[name] = hamster;
    }

    // ����� ������ �� ����� � ������� ���������� ��������
    getHamsterProperty(hamsterName, propertyName) {

        if (this.hamsters[hamsterName]) {
            let hamster = this.hamsters[hamsterName];

            if (hamster.hasOwnProperty(propertyName))
                return hamster[propertyName];
            else
                return 'Unknown property';
        }
        else
            return 'Unknown hamster';
    }

    //����� ������ �� ����� � ���������� ��������
    evaluateFunction(hamsterName, functionName) {

        if (this.hamsters[hamsterName]) {
            if (eval(`typeof this.hamsters[hamsterName].${functionName}`) !== 'undefined') 
                return eval(`this.hamsters[hamsterName].${functionName}()`)
            else
                return 'Unknown action'
        }
        else
            return 'Unknown hamster';
    }
}

//����� ������
class Ration {
    //������ ����� ��������, � ���� ��
    constructor(name) {
        this.name = name;
    }
}

//����� ��������
class Animal {
    //�������� ����� �������� (���, ���������, ������������ ���)
    constructor(name, volume, food) {
        this.name = name;
        this.volume = volume;
        this.ration = new Ration(food);
        this.food = this.ration.name;
    }

    //�������� ����� ����
    eat() {
        return `${this.name} eats ${this.food}.`;
    }
    //� �������� �����
    vocalize() {
        return `${this.name} squeaks ${this.volume} dB.`;
    }
}

//����� �����
class Hamster extends Animal {
    //����� ���� �������� � ����� ��� � ������ ������
    constructor(name, volume, speed, food) {
        super(name, volume, food);
        this.speed = speed;
    }

    //������� ������
    roll() {
        return `${this.name} turn the wheel ${this.speed} rpm.`;
    }

}

module.exports = { HamstersCell, Hamster };