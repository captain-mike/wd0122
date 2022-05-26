let arr:number[] = [10,20,30];

let moltiplicazione:number[] = arr.map((n:number) =>  n * 2)

console.log(arr, moltiplicazione)


let strArr:string[] = ['ciao','ciao2','ciao3'];

let strArrBold:string[] = strArr.map((s:string)=> `<b>${s.toUpperCase()}</b>`);

console.log(strArrBold);

