let arr = [1,2,3,4]
console.log(arr, arr.length);
console.log([5,6,7,8], [5,6,7,8].length);//posso creare array al volo senza creare una variabile


let pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]
let pizzaDiavola = pizze[1];
console.log(pizzaDiavola);

console.log( pizze );
console.log( pizze[0] );

pizze[0] = 'Capricciosa'


console.log( pizze );

let ul = document.querySelector('ul');//il primo ul della pagina

console.log(ul.innerHTML);
console.log(ul.innerText);


ul.innerHTML = pizze[2]


let li = document.querySelector('ul li:nth-of-type(3)')
console.log(li);



let liAll = document.querySelectorAll('ul li')//array di oggetti
console.log(liAll[2])

/**
 * Destrutturazione
 */

pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]

let [pizza1,pizza2,pizza3] = pizze;

/**
 * sostituisce questa sintassi vecchia, ma ancora corretta
 * 
 * let pizza1 = pizze[0]
 * let pizza2 = pizze[1]
 * let pizza3 = pizze[2]
 * 
 */


console.log(pizza2);

/**
 * conversioni
 */

document.write(pizze)
document.write(pizze.toString())


/**
 * Riordinare
 */

let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana',
]
nomi.sort()

console.log(nomi);

/**aggiungere e rimuovere elementi di un array */


nomi.push('Ivona');
console.log(nomi);


let nomeEliminato = nomi.pop()//è possibile assegnare ad una variabile il risultato di pop(), in questo modo otterremo una copia di ciò che abbiamo eliminato
console.log(nomi);
console.log('Hai eliminato il nome ' + nomeEliminato);

nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana',
]

nomi.splice(2,1)
//array.splice(indiceDiPartenza,NumeroElementiDaEliminare)

console.log(nomi);

nomi.splice(2,1,'Ledio')//sostituisco il terzo elemento con "ledio"
console.log(nomi);


nomi = ['Mario','Zaira','Luca','Massimo','Adriana']
let nomi2 = ['Francesco','Simone','Pasquale']
let nomi3 = ['Ivona','Leopoldo','Chiara']

console.log(nomi)


let unito = nomi.concat(nomi2,nomi3)
console.log(unito);
console.log(nomi);


let x = [
    1,
    2,
    3,
    4,
    'ciao',
    [4,8,96,['a','b','c'],
    'ciao']]

console.log( x[2] );

console.log( x[5][3][0] );


 