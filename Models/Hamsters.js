class HamstersCell {
    constructor() {

        this.hamsters = {};
    }

    createHamster(name, volume, speed, food) {
        // ������� ������
        let hamster = new Hamster(name, volume, speed, food);
        // ���������� � ������
        this.hamsters[name] = hamster;
//        return hamster;
    }

    // ����� ������ �� ����� � ������� ���������� ��������
    getHamsterProperty(hamsterName, propertyName) {

        if (this.hamsters[hamsterName])
        {
            let hamster = this.hamsters[hamsterName]

            if (hamster.hasOwnProperty(propertyName))
                return hamster[propertyName]
            else
                return "Unknown property"
        }
        else
            return "Unknown hamster"
    }
}


class Hamster {
    constructor(name, volume, speed, food) {
        this.name   = name;
        this.volume = volume
        this.speed  = speed
        this.food   = food
    }
}

module.exports = { HamstersCell, Hamster };