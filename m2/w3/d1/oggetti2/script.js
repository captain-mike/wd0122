function Automobile2(_marca, _colore) {
    this.marca = _marca
    this.colore = _colore
    this.ruote = 4
    this.prezzo = 10000
    this.sconto = (percentuale) => {
        this.prezzo = (this.prezzo / 100) * (100 - percentuale)
    }
}

let fiat = new Automobile2('Fiat', 'Nero')

console.table(fiat)
fiat.sconto(10)
console.table(fiat)

class Automobile {
    constructor(_marca, _colore) {
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
    }

    sconto(percentuale) {
        this.prezzo = (this.prezzo / 100) * (100 - percentuale)
    }
}

let mercedes = new Automobile('Mercedes', 'Nero')

console.table(mercedes);
mercedes.sconto(10)
console.table(mercedes);


let ferrari = new Automobile('Ferrari', 'rossa')
let lamborghini = new Automobile('Lamborghini', 'Gialla')

Automobile.prototype.brandProtetto = true

console.log([ferrari, lamborghini]);
console.table(ferrari.brandProtetto);