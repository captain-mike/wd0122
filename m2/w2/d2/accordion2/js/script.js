
let bottoni = document.querySelectorAll('button')//array
let contents = document.querySelectorAll('.content')//arrayCitta


for(let bottone of bottoni ){

    bottone.addEventListener('click', function(){

        let daChiudere = document.querySelector('.content.open')
        
        if(daChiudere != null)
        daChiudere.classList.remove('open')

        let target = bottone.getAttribute('data-target')
        let daAprire = document.querySelector(target)
        if(daChiudere != daAprire){   
            document.querySelector(target).classList.toggle('open')
        }
        
    })
}
/*
si poteva fare anche con foreach
bottoni.forEach((bottone,i) =>{
    
    bottone.addEventListener('click', function(){
        
        let target = bottone.getAttribute('data-target')
        document.querySelector(target).classList.toggle('open')
        
    })

})*/




