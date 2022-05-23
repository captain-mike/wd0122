var boolean = true;
if (boolean) {
    console.log('ok');
}
var eta = 30;
if (eta < 18) {
    console.log('Sei minorenne');
}
else if (eta >= 18 && eta <= 120) {
    console.log('Sei maggiorenne');
}
else {
    console.log('Sei antico');
}
//un confronto genera sempre un dato booleano
console.log(eta >= 18 && eta <= 120); //entrambe vere quindi true
console.log(eta >= 18 && eta <= 20); //una falsa quindi false
console.log(eta >= 18 || eta <= 20); //una vera quindi true
var b = true;
console.log(!b); //l'operatore ! serve ad invertire il risultato
console.log(!(eta >= 18 || eta <= 20)); //l'operatore not ribalta il risultato grazie alle parentesi
