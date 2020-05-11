// import "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
import { Superman } from "./superman.js";
import { Mage } from "./mage.js";
// sau import mage -------- si scapam de acolade

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