/**
 *  funzione anonima
 * da sola così è inutile
 * e da anche errore perchè non ha nome
 * 
 
 function(){
     alert('questo alert non si vedrà')
    }
*/

let bottone = document.getElementById('bottone')
//bottone.onclick = miaFunzione; //altra possibilità per usare onclick

function miaFunzione(){
    return
    console.log('funzione invocata');
}

function trasformaGrassetto(s){
    return '<b>'+s+'</b>'
}

let saluto = 'ciao'
document.write(saluto);
document.write( trasformaGrassetto('Benvenuto') );


function getSomma(){
    return 3 * 4
}

let x = getSomma();
console.log(x);

console.log( getSomma() );


/*
* funzioni parametriche
*/

function getSommaPro(a,b){
    return a + b;
}
function moltiplica(a,b){
    document.write('<br>')
    document.write(a * b)
    return a * b;
}

let res1 = getSommaPro(3,6);
let res2 = getSommaPro(30,65987651);
console.log(res1,res2);


let res3 = moltiplica(res1,res2);
let res4 = moltiplica(4,2);
console.log(res3, res4);


function moltiplica2(a,b,c = 1){//se non darò un valore al parametro c, il suo valore di default sarà 5
    return a * b * c;
}
moltiplica2(2,3)//risultato 2 * 3 * 1
moltiplica2(2,3,8)//risultato 2 * 3 * 8

function moltiplica3(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    let terzoValore = c || 1
    return a * b * terzoValore;
}
moltiplica3(3,4)//risultato 3 * 4 * 1
moltiplica3(3,4,8)//risultato 3 * 4 * 8

function moltiplica4(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    if(c != undefined){
        return a * b * c;
    }else{
        return a * b;
    }
}

function moltiplica5(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    if(c != undefined){
        var res = a * b * c;
    }else{
        var res = a * b;
    }
    
    return res;
}


(function(){
    console.log('questo log si vedrà')
})()


function saluto2(){

    let s = 'Ciao, '
    function nome(){
        let frase = s + 'Mario'
        return frase;
    }

    return nome();
}

console.log(saluto2());

function closure(a){

    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}

let risultato = closure(2)(4)(3)
console.log(risultato);


/**
 * funzioni freccia
 */


function dividi(){
    return 20 / 2;
}

let divisione = () => 20 / 2//il return è implicito

console.log( divisione() );


let incrementa = a => a+1;//con 1 solo parametro le parentesi tonde sono facoltative

console.log( incrementa(4) )


let divisionePro = (a,b) => a / b;//con 2 parametri le tonde sono obbligatorie

console.log( divisionePro(4,2) )


let divisioneProLog = (a,b) => console.log(a / b);//il return implicito non mi crea problemi se non uso la funzione per restituire dati

divisioneProLog(10,2)


let divisioneProEvolution = (a,b) => {//con la presenza delle graffe il return non è implicito

    let res = a / b;
    document.write(res);
    return res

}


