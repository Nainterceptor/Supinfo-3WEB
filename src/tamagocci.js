function Tamagocci() {
    this.weight = 5;
    this.minWeight = 1;
    this.maxWeight = 10;
    this.age = 0;
    this.happiness = 5;
}

Tamagocci.prototype.eat = function () {
    this.weight += 2;
};

Tamagocci.prototype.play = function () {
    this.weight -= 1;
    this.happiness += 1;
};

Tamagocci.prototype.becomeOlder = function () {
    this.age += 1;
    this.minWeight += 1;
    this.maxWeight += 1;
    this.happiness -= 1;
};

Tamagocci.prototype.isDead = function () {
    return this.weight < this.minWeight
        || this.weight > this.maxWeight
        || this.happiness == 0;
};

Tamagocci.prototype.getPicture = function () {
    if (this.isDead())                    return 'pk_dead.gif';

    if (this.weight < this.minWeight + 3) return 'pk_bad.gif';
    if (this.weight > this.maxWeight - 3) return 'pk_bad.gif';
    if (this.happiness < 3)               return 'pk_bad.gif';

    return 'pk_good.gif';
};


function Pikachu() {
    Tamagocci.apply(this);
}

Pikachu.prototype = Object.create(Tamagocci.prototype)

Pikachu.prototype.getPicture = function () {
    if (this.weight < this.minWeight + 3) return 'pk_bad.gif';
    if (this.weight > this.maxWeight - 3) return 'pk_bad.gif';

    return Tamagocci.prototype.getPicture.apply(this);
};


function HelloKitty() {
    Tamagocci.apply(this)
}

HelloKitty.prototype = Object.create(Tamagocci.prototype)

HelloKitty.prototype.getPicture = function () {
    if (this.isDead())                    return 'hk_dead.png';

    if (this.weight < this.minWeight + 3) return 'hk_bad.gif';
    if (this.weight > this.maxWeight - 3) return 'hk_bad.gif';
    if (this.happiness < 3)               return 'hk_bad.gif';

    return 'hk_good.gif';
};