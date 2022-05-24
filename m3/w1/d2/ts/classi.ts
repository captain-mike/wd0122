class Car{

    public modello:string;
    public marca:string;
    public colore:string;

    protected prezzo:number;
    protected scontoRivenditore:number = 30;


    protected static stato = 'Italia';

    constructor(mod:string, mar:string, col:string, p:number){
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p
    }

    public dettagliAuto():string{
        return this.modello + " " + this.marca + " " + this.colore;
    }

    public set cambiaScontoRivenditore(n:number){//metodo che consente la sola scrittura
        this.scontoRivenditore = n;
    }

    public get prezzoFinale():string{//metodo per la sola lettura di dati
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }

    public static nazione():void{
        console.log(this.stato);
    }
    
}

let fiat = new Car('500','Fiat','grigio',10000);

console.log( fiat.modello )
console.log( fiat.prezzoFinale )
//console.log( fiat.scontoRivenditore ) non posso accedere alle proprietà protected o private
//fiat.scontoRivenditore = 20; //non posso accedere alle proprietà protected o private

fiat.cambiaScontoRivenditore = 20 //il metodo setter modifica anche le proprietà con accesso privato o protetto
console.log( fiat.prezzoFinale )
console.log(fiat);

//fiat.nazione();//non posso usarlo così


Car.nazione();