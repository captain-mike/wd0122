class Test{

    public readonly name:string;
    public email:string = "test@example.com";

    //public id:number; siccome ho usato readonly tra gli argomenti del costruttore devo eliminare questa riga o me la segnerà come duplicato

    constructor(name:string, readonly id:number){
        this.name = name;
        this.id = id;
    }
    
    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error("Email già esistente")
        }
        
        this.email = email;
    }
    
}

let x = new Test('Giovanna',1);
x.checkEmail('test2@example.com')

console.log(x.id, x.name, x.email)

//x.id = 5; non posso

