function Logger(f:Function){

    console.log('...loading');
    console.log(f);

}

@Logger
class Person{
    name:string = 'Max';

    constructor(){
        console.log('Creazione persona');
    }
}

const pers = new Person();

console.log(pers);


function AddMethod(target:Function){
    console.log(target);

    target.prototype.saluta = function(){
        console.log('ciao')
    }  
    
    target.prototype.nome = 'Max';
}

@AddMethod
class Test{
    saluta() {
        
    }
}

let x = new Test();
console.log(x);

x.saluta()