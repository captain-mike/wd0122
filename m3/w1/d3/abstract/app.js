"use strict";
class Veicoli {
    constructor(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
//let veicolo = new Veicoli(3, 'Piaggio','',1500,'apecar');//non si può fare
class Automobili extends Veicoli {
    constructor(marca, modello, prezzo, speed) {
        super(4, marca, modello, prezzo, 'Automobile');
        this.speed = 0;
    }
    aumentaVelocita(vel) {
        if (!vel) {
            this.speed++;
        }
        else {
            this.speed += vel;
        }
    }
    riduciVelocita(vel) {
        if (vel == undefined) {
            this.speed--;
        }
        else {
            this.speed -= vel;
        }
    }
}
let veicolo = new Automobili('mini', 'cooper', 20000, 0);
veicolo.aumentaVelocita();
veicolo.aumentaVelocita(5);
veicolo.riduciVelocita();
veicolo.riduciVelocita(5);
console.table(veicolo);
console.table(veicolo.dettagliVeicolo());
//# sourceMappingURL=app.js.map