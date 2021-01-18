// vienos eilutes komentaras

/*
keletos
eiluciu
komentaras
*/


// jei noresime ka nors issispausdinti, tai naudojam console.log()
console.log(2021);
console.log("Labas rytas")


/*
Reismiu tipai:
number
string (tekstas)
boolean (logine reiksme)
array (sarašas)
object (objektas)
*/

/*
Kintamuju iniciavimo budai:
const (pagrindinis, kuri reikia rinktis by default)
let (renkames jei info keiciasi)
var (nenaudoti)
*/

// inicijuoti kintamaji, kuris nekada nesikeis ir bus skaicius 2021
const metai = 2021;

// inicijuoti kintamaji, kuris nekada nesikeis ir bus tekstas Petras
const vardas = 'Petras';

console.log(metai);
console.log(vardas);

console.log(metai, vardas);

console.log("Metai:", metai);
console.log("Asmens vardas:", vardas, "ir jis gyveno:", metai, "metais.");

const pirmasSkaicius = 13;
const antrasSkaicius = 2;

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma)
console.log(pirmasSkaicius, "+", antrasSkaicius, "=", suma)

let pinigine = 0
console.log("Turiu pinigu:", pinigine);

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga;
console.log("Turiu pinigu:", pinigine);

const antraAlga = 250;
pinigine = pinigine + antraAlga;
console.log("Turiu pinigu:", pinigine);

const treciaAlga = 650;
pinigine = pinigine + treciaAlga;
console.log("Turiu pinigu:", pinigine);

console.log("-----------------------------");

// matematines operacijos
const s1 = 5;
const s2 = 8;

console.log(s1 + s2);