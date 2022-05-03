
let bottoni = document.querySelectorAll('button')//array
let contents = document.querySelectorAll('.content')//arrayCitta


for(let bottone of bottoni ){

    bottone.addEventListener('click', function(){
        
        bottone.nextElementSibling.classList.toggle('open')
        
    })
}
/*
si poteva fare anche con foreach
bottoni.forEach((bottone,i) =>{
    
    bottone.addEventListener('click', function(){
        
        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+i
        
    })

})*/




