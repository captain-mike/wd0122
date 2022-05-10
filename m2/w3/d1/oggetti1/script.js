//1 creo un oggetto e lo valorizzo a mano
let oggetto = {
    nome: 'Mario'
}

//i due sistemi sotto servono a creare serie di oggetti
//sono come dei libretti di istruzioni che servono a creare oggetti tutti identiti
//come fossero stampini

//2 costruttore dell'oggetto
function CostruttoreOggetto(){
    this.nome = 'Mario'
}

let oggetto2 = new CostruttoreOggetto();

//3 classe
class ClasseOggetto{
    constructor(){
        this.nome = 'Mario'
    }
}

let oggetto3 = new ClasseOggetto();
let oggetto4 = new ClasseOggetto();


console.log(oggetto);
console.log(oggetto2);
console.log(oggetto3);

let automobile = {
    marca:'fiat',
    colore:'bianco'
}

class Automobile{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
    }
}

let mercedes = new Automobile('Mercedes','Nero')
let apecar = new Automobile('Piaggio','Nero')
apecar.ruote = 3;

console.table(apecar);
console.table(mercedes);

let fiat = new Automobile('','')
fiat.marca = 'Fiat'
fiat.colore = 'Bianco'

console.table(fiat);


/** parentesi quadre */


let pizza = {
    gusto : 'Margherita',
}

pizza['gusto']//bene ma non benissimo
pizza.gusto//sintassi corretta


let pizza2 = {
    0: 'Margerita',//potreste avere un oggetto contenente proprietà che iniziano con numeri
    'gusto-pizza': 'Napoletana'//potreste avere un oggetto contenente proprietà che contengono caratteri non permessi
}

//pizza2.0 non funzionerebbe
pizza2[0];
console.log(pizza2[0]);
//pizza2.gusto-pizza non funzionerebbe per via del trattino alto
pizza2["gusto-pizza"]


