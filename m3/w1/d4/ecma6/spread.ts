let arrrrrr:number[] = [1,2,3]
let arrrrrr2:number[] = [4,5,6]

let spread:number[] = [...arrrrrr,...arrrrrr2]

console.log(spread);

function somma(...numeri:number[]){//l'operatore di spread ci permette in questo caso di inserire n argomenti nella funzione, che verranno inseriti nell'array numeri
    return numeri.reduce((c:number, n:number) => c + n)
}

console.log(somma(2,3,6,10));
