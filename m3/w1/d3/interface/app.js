var Automobili = /** @class */ (function () {
    function Automobili(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    Automobili.prototype.aumentaVelocita = function (vel) {
        if (!vel) {
            this.speed++;
        }
        else {
            this.speed += vel;
        }
    };
    Automobili.prototype.riduciVelocita = function (vel) {
        if (vel == undefined) {
            this.speed--;
        }
        else {
            this.speed -= vel;
        }
    };
    //metodi e proprietà imposte dall'interfaccia IDettagli
    Automobili.prototype.dettagliVeicolo = function () {
        return "Modello: ".concat(this.modello, ", Marca: ").concat(this.marca, ", Ruote: ").concat(this.ruote);
    };
    return Automobili;
}());
var veicolo = new Automobili(4, 'mini', 'cooper', 20000, 'automobile');
veicolo.aumentaVelocita();
//# sourceMappingURL=app.js.map