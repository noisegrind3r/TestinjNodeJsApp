//Набор хомяков
class HamstersCell {

    constructor() {

        this.hamsters = {};
    }

    createHamster(name, volume, speed, food) {
        // Создаем хомяка
        let hamster = new Hamster(name, volume, speed, food);
        // Засовываем в клетку
        this.hamsters[name] = hamster;
    }

    // Поиск хомяка по имени и возврат выбранного свойства
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

    //Поиск хомяка по имени и выполнение действия
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

//Класс рацион
class Ration {
    //Рацион имеет название, и пока всё
    constructor(name) {
        this.name = name;
    }
}

//Класс животное
class Animal {
    //Животное имеет свойства (имя, громкость, потребляемая еда)
    constructor(name, volume, food) {
        this.name = name;
        this.volume = volume;
        this.ration = new Ration(food);
        this.food = this.ration.name;
    }

    //Животное умеет есть
    eat() {
        return `${this.name} eats ${this.food}.`;
    }
    //И издавать звуки
    vocalize() {
        return `${this.name} squeaks ${this.volume} dB.`;
    }
}

//Класс хомяк
class Hamster extends Animal {
    //Хомяк тоже животное и умеет еще и круить колесо
    constructor(name, volume, speed, food) {
        super(name, volume, food);
        this.speed = speed;
    }

    //крутить колесо
    roll() {
        return `${this.name} turn the wheel ${this.speed} rpm.`;
    }

}

module.exports = { HamstersCell, Hamster };