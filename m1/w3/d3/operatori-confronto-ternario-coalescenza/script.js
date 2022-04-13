let num = 5;
let str = 'test';
let bool = true;
let arr = [];
let obj = {}

console.log(
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj
);

if(typeof num == 'number'){
    console.log('è un numero')
}

let num1 = 1;
let num2 = '1';

console.log(num1 == num2);//vero anche se i tipi di dato sono diversi ma i valori sono ugugali
console.log(num1 === num2);//falso perchè devono essere identici anche i tipi di dato
console.log(num1 != num2);//false perchè il valore è diverso
console.log(num1 !== num2);//falso perchè devono essere diversi anche i tipi di dato e i valori


let eta = prompt('Scrivi la tue età') || 0;

let conferma = eta >= 18 ? 'Sei maggiorenne' : 'Sei minorenne';
document.write(conferma)