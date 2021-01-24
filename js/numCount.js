"use strict";

/*
0 - 0       = 0
0 - 4       = 10
0 - 100     = 5050
574 - 815   = baisiai didelis teigiamas skaicius
-50 - 50    = 0
-70 - 30    = santykinai nedidelis neigiamas skaicius (-2020)
*/ 

/* eleskumas pagal lengvuma:
0 - 4       = 10
-50 - 50    = 0
0 - 100     = 5050
0 - 0       = 0
574 - 815   = baisiai didelis teigiamas skaicius
-70 - 30    = santykinai nedidelis neigiamas skaicius (-2020)
*/ 

const from = 0;
const till = 10;
let sum = 0;

for (let i = from; i <= till; i++) {
    sum += i;
    console.log(i, sum);
}

/*
   kai daug skaiciu geriau istrinti "spaudinima" -console.log(i, sum)
   nes neistrinus "atspausdins"  daaaaug skaiciu.
*/

for (let i = from; i <= till; i++) {
    sum += i;
}

const ats = `Suma nuo ${from} iki ${till} yra ${sum}`;

console.log(ats);