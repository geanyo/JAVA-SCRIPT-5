class Hero {
    constructor(name, life, mana) {
        this.name= name;
        this.life= life;
        this.mana= mana;
    }
    firePrimary() { }
    fireSecondary() { }
    reciveHit() { }
    isAlive() {
        return this.life>0;
    }
}

class Superman extends Hero {
    firePrimary() {
        this.mana -= 5;
    } 
    fireSecondary() {
     this.mana -= 1;
    }
    reciveHit() {
        this.life -= 0.1;
    }
}

class Mage extends Hero {
    firePrimary() {
        this.mana -= 20;
        this.life += 2;
    } 
    fireSecondary() {
        this.mana -= 10;
        this.life += 1;
    }
    reciveHit() {
        this.life -= 10;
    }  
}

var clark= new Superman("Clark Kent", 1000, 1000);
var xevras= new Mage("Xevras", 100, 300);

clark.firePrimary();
xevras.reciveHit();
xevras.firePrimary();
clark.reciveHit();
clark.fireSecondary();
xevras.reciveHit();
xevras.fireSecondary();
clark.reciveHit();

console.log(clark);
console.log(xevras);

console.log(clark.isAlive());
console.log(xevras.isAlive());