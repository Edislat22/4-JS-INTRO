/*

for (let i=0; i<5; i++) {
    kartotinas kodas
}

*/

console.log('PRADZIA');

for (let i = 2; i <= 8; i += 1) {
    console.log('kartotinas kodas', i);
}

console.log('PABAIGA');


// i=0; 0 < 5 true
//    console.log('kartotinas kodas');
      // i++ -> = 2

// i=1; 1 < 5 true
//    console.log('kartotinas kodas');
      // i++ -> = 3
      
// i=2; 2 < 5 true
//    console.log('kartotinas kodas');
      // i++ -> = 4      
// i=4; 4 < 5 true
//    console.log('kartotinas kodas');
      // i++ -> = 5

// i=5; 5 < 5 false

console.log('-----------------');

const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas'];

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);

const words2 = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrika'];

for (let i = 0; i < words2.length; i++) {
const word = words2[i];

    console.log(i, word);
    console.log('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis:', word.length);
}

console.log(words);
