import { Hero } from "./hero.js";

// ./ ------- DIRECTOR CURENT
// ../ ------- DIRECTOR PARINTE

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

export { Mage }