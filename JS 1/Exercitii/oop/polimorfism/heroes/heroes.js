class Hero {
    constructor(name, life, mana) {
        this.name= name;
        this.life= life;
        this.mana= mana;
    }
    firePrimary(anotherHero) { }
    fireSecondary(anotherHero) { }
    reciveHit(energy) { }
    isAlive() {
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 5;
        anotherHero.reciveHit(30);
    } 
    fireSecondary(anotherHero) {
     this.mana -= 1;
     anotherHero.reciveHit(5);
    }
    reciveHit(energy) {
        this.life -= 0.1;
        if(energy > 10) {
            this.life -= 0.1 * energy;
        }
    }
}

class Mage extends Hero {
    firePrimary() {
        this.mana -= 20;
        this.life += 2;
        anotherHero.reciveHit(15);
    } 
    fireSecondary() {
        this.mana -= 10;
        this.life += 1;
        anotherHero.reciveHit(5);
    }
    reciveHit(energy) {
        this.life -= 10;
        this.mana += energy * 0.5;
    }  
}

var clark= new Superman("Clark Kent", 1000, 1000);
var xevras= new Mage("Xevras", 100, 300);

clark.firePrimary(xevras);
xevras.firePrimary(clark);
clark.fireSecondary(xevras);
xevras.fireSecondary(clark);

console.log(clark);
console.log(xevras);

console.log(clark.isAlive());
console.log(xevras.isAlive());