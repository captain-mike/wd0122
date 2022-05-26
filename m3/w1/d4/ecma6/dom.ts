let bottone:Element|null = document.querySelector('#myform button')

bottone?.addEventListener('click',function(e){
    e.preventDefault();

    let fields = Array.from(document.querySelectorAll<HTMLInputElement>('#myform input'))
    let values = fields.map((f:HTMLInputElement) => f.value)
    let [name,lastname,password] = values

    let valid:boolean = true;

    if(password.length < 8){
        valid = false;
    }

    for(let field of fields){

        if(!field.value){
            valid = false;
        }

    }


    if(valid){

        //invia dati

        console.log('valido')

    }

})
