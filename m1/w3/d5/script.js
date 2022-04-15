let campo = document.querySelector('#test')


campo.addEventListener('keyup',function(evento){

    console.log(evento)
    
    if(evento.key == 'w'){
        //svolgi un compito
    }
    
})


let bottoni = document.querySelectorAll('button')

bottoni[0].addEventListener('click',sfondoRosso)
bottoni[1].addEventListener('click',sfondoRosso)
bottoni[2].addEventListener('click',sfondoRosso)
bottoni[3].addEventListener('click',sfondoRosso)

function sfondoRosso(){
    this.style.backgroundColor = 'red'
}