/*
commento su più righe
*/

//commento su una riga

/*
Tipi di dato:

number
string
boolean
object => liste di dati e funzioni separate per nome
array => lista di valori identificati per numero

*/

var numero = 5;//dato di tipo numerico
var testo = '5';//dato di tipo testuale(stringa)
var booleano = true;
var oggetto = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30
};
console.log(oggetto);
var array = [
    1,
    2,
    3,
    4,
    'ciao'
];


/* concatenamento e operazioni tra variabili */

var a = 2;
var b = 2;
var c = a + b;//valore 4

var saluto = 'Ciao';
var domanda = 'come stai?';

document.write(saluto + ' ' + domanda)



document.write('<ul>');
document.write('<li>' + oggetto.nome + '</li>');
document.write('<li>' + oggetto.cognome + '</li>');
document.write('<li>' + oggetto.eta + '</li>');
document.write('</ul>');

/* funzioni */

function somma(){
    console.log('prova per vedere se funziona')
    document.write(2 + 6);
}
somma()


function ottieniSomma(){
    return 2 + 6;
}

var risultato = ottieniSomma();
console.log(risultato);

/*
assegnamento valori
*/

var nome = 'Mario';
console.log(nome);

nome = 'Giovanni';
console.log(nome);


/*
Lavorare con oggetti del dom
*/

var div1 = document.getElementById('elem')//prendi l'elemento con id elem
console.log(div1);

console.log(div1.innerHTML)

div1.innerHTML = '<b>prova</b>';

div1.style.backgroundColor = 'red';

div1.classList.add('giallo');

var blocchi = document.getElementsByClassName('blocco')//[{},{}]
console.log(blocchi);

blocchi[0].style.backgroundColor = 'green'
blocchi[1].style.backgroundColor = 'green'
blocchi[2].style.backgroundColor = 'green'
blocchi[3].style.backgroundColor = 'green'


var b = document.getElementsByTagName('b')//[{},{}]


var tutto = document.querySelectorAll('#elem, .blocco, b');