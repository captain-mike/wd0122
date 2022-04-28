let bottone  = document.querySelector('#myForm button')

bottone.addEventListener('click', function(event){

    event.preventDefault();//prevengo l'invio del form bloccando il comportamento standard del bottone

    let nome = document.querySelector('#nome')
    let password = document.querySelector('#password')

    let valid = true

    if(nome.value == ''){
        nome.nextElementSibling.innerHTML = 'Devi inserire il nome'
        valid = false
    }else{
        nome.nextElementSibling.innerHTML = ''
    }

    if(password.value == ''){
        password.nextElementSibling.innerHTML = 'Devi inserire la password'
        valid = false
    }else{
        password.nextElementSibling.innerHTML = ''
    }


    if(valid){
        //invio il form
        //posso inviare i dati con una chiamata ajax in POST
        //oppure:
        document.querySelector('#myForm').submit()
    }



})