class HamstersCell {
    constructor() {

        this.hamsters = {};
    }

    createHamster(name, volume, speed, food) {
        // Создаем хомяка
        let hamster = new Hamster(name, volume, speed, food);
        // Засовываем в клетку
        this.hamsters[name] = hamster;
//        return hamster;
    }

    // Поиск хомяка по имени и возврат выбранного свойства
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