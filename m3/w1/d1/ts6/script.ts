class User{
    name!: string;
    lastName!: string;
    age!:number;
    address!:Address;
}

class Address{
    via!: string;
    civico!: number;
    citta!: string;
}


let user:User = {
    name: 'Mario',
    lastName: 'Rossi',
    age: 32,
    address:{
        via:'Roma',
        civico: 1,
        citta:'Milano'
    }
};
let user2:User = {
    name:'Mario',
    lastName:'Rossi',
    age:32,
    address:{
        via:'Roma',
        civico: 1,
        citta:'Milano'
    }
};

let users:User[] = [user, user2]