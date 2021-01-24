"use strict";

const day = 8;

switch (day) {
    case 1:
        console.log('Pirmadiens');
        break;

    case 2:
        console.log('Antradienis');
        break;

    case 3:
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos saveiteje nera');
        break;
}

const day2 = 'ant';

switch (day2) {
    case 'pir':
        console.log('Pirmadiens');
        break;

    case 'ant':
        console.log('Antradienis');
        break;

    case 'tre':
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos saveiteje nera');
        break;
}

console.log('----------------------------');

const day3 = 60;

switch (day3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena')
        break; 
    case 6:
    case 7:
        console.log('Savaigalis');
        break;       
    default:
        console.log('Tokios dienos saveiteje nera');
        break;
}

console.log('----------------------------');

const stotele = 'kkkkkkkk';

switch (stotele) {
    case 'ziedas':
        console.log('ziedas');
    case 'parko':
        console.log('parko');
    case 'geniu':
        console.log('geniu');
    case 'leliju':
        console.log('leliju');
    case 'rudens':
        console.log('rudens');
    case 'zaliasis':
        console.log('zaliasis');
        break;

    default:
        console.log('Tokia stotele nerasta');
}

console.log('----------------------------');

const eiga = 'sienos';

switch (eiga) {
    case 'zeme':
        console.log('Paruosiam zeme');
    case 'parko':
        console.log('parko');
    case 'pamatai':
        console.log('Paruosiam pamatus');
    case 'sienos':
        console.log('Statom sienas');
    case 'stogas':
        console.log('Statom stoga');
    case 'apsiltinimas':
        console.log('Apsiltinam nama');
    case 'irengimas':
        console.log('Dirbam viduje');
        break;

    default:
        console.log('Tokia stotele nerasta');
}
