function Animal(sex = "M") {
    this.sex = sex;
}

Animal.prototype.run = function () {
    console.log("I can run");
}

Animal.prototype.jump = function () {
    console.log("I can jump");
}

function Mammal(sex) {
    Animal.call(this, sex);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.milk = function () {
    switch (this.sex) {
        case "M":
            return false;
        case "W":
            return true;
        default:
            console.error("WRONG_GENDER");
            break;
    }
}

function Raccoon(gender) {
    Animal.call(this, gender);
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.steal = function () {
    console.log("I can steal")
}

let animal = new Animal("M");

animal.jump();
animal.run();

let mammal = new Mammal("W");

mammal.jump();
mammal.run();
console.log(mammal.milk());

let raccoon = new Raccoon();

raccoon.jump();
raccoon.run();
raccoon.steal();
console.log(raccoon.milk("M"));
