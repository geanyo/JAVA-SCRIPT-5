import { Hero } from './hero.js';

// ./ ------- DIRECTOR CURENT
// ../ ------- DIRECTOR PARINTE

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

export { Superman }