//enumeratori
enum Months {
    Gennaio = 4,
    Febbraio,
    Marzo,
    Aprile
}

console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);

enum Color{
    Bianco = '#fff',
    Nero = '#000',
}

let colore : Color = Color.Bianco


//funzioni e oggetti
const states:{italy:string,england:string,id:any} = {
    italy:'Rome',
    england:'London',
    id:function():string{
        return this.italy + ' ' + this.england;
    }
}

console.log(states.italy, states.england, states.id());


function somma(a:number,b:number,c?:number):number{
    if(!c){
        return a + b;
    }else{ 
        return a + b + c;
    }
}
