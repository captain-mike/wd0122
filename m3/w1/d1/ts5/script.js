//tipi di dato
var str = 'Testo'; //dato testuale
var num = 1000; //dato numerico
var bool = false; //dato booleano
var obj = {}; //oggetto
var arr = [];
var strArr = ['Marco', 'Lucia', 'Maria'];
var numArr = [0, 1, 2, 3];
var objArr = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
var anyArr = ['Marco', 0, {}];
var any = 'ciao'; //qualunque tipo di dato
var unk = 12; //dato sconosciuto
var union = 'test';
union = {};
//funzioni
function saluta(testo) {
    console.log(testo);
}
function ottieniSaluto(testo, tag) {
    var t = document.createElement(tag); //creo un tag ma non lo visualizzo
    t.innerHTML = testo;
    return t;
}
console.log(ottieniSaluto('ciao', 'b'));
