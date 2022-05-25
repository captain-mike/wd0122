interface IVeicoli{
    speed:number;//no modificatori visibilità
    aumentaVelocita(vel?:number):void
    riduciVelocita(vel?:number):void
}

interface IDettagli{
    ruote:number;
    marca:string;
    modello:string;
    dettagliVeicolo():string
}

class Automobili implements IVeicoli, IDettagli{

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

    //metodi e proprietà imposte dall'interfaccia IVeicoli
    speed: number;
    public aumentaVelocita(vel?:number):void{
        if(!vel){
            this.speed++;
        }else{
            this.speed += vel;
        }
    }
    public riduciVelocita(vel?:number): void {
        if(vel == undefined){
            this.speed--;
        }else{
            this.speed -= vel;
        }
    }
    
    
    //metodi e proprietà imposte dall'interfaccia IDettagli
    dettagliVeicolo():string{
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }

}

let veicolo:Automobili = new Automobili(4,'mini','cooper',20000,'automobile');

veicolo.aumentaVelocita()