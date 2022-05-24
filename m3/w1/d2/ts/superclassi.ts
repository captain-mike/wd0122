class Veicoli{

    public ruote:number;

    public marca:string;
    public modello:string;

    protected prezzo:number;

    public tipo:string;

    constructor(ruote:number, marca:string, modello:string, prezzo:number, tipo:string) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }

    dettagliVeicolo(){
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }

}

let apecar = new Veicoli(3,'Piaggio','',1500,'apecar');

class Bici extends Veicoli{

    constructor(marca:string, modello:string, prezzo:number){

        super(2, marca, modello, prezzo, 'Bicicletta');

    }

}

class Cars extends Veicoli{

    public autoradio:boolean = true;

    private costoPieno:number = 75;

    constructor(marca:string, modello:string, prezzo:number){

        super(4, marca, modello, prezzo, 'Automobile');

    }

}

let auto = new Cars('Fiat','500',1500)

console.log(auto);


class ElectricCars extends Cars{


    cambiaCostoPieno(){
        this.costoPieno = 30;//la proprietà costo Pieno non è accessibile dalla sottoclasse
    }

}

let autoElettrica = new ElectricCars('Fiat','500 elettrica',1500);
console.log(autoElettrica);







