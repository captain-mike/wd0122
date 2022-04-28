

//con create element genero un elemento HTML in memoria e lo metto nella variabile assegnata
//IN NESSUN MODO QUESTO METODO MOSTRA IL TAG NELL'HTML
let div = document.createElement('div');//<div></div>
div.innerHTML = 'test'
div.classList.add('classeProva')

let div2 = document.createElement('div');//<div></div>
div2.innerHTML = 'test2'
div2.classList.add('classeProva')

document.querySelector('#html-generato').append(div)
document.querySelector('#html-generato').prepend(div2)

/**
 * to do list
 */

let bottone  = document.querySelector('#inserisci')
let toDoArea  = document.querySelector('#to-do')

let x = 1;

bottone.addEventListener('click',function(){//se clicchi su bottone fa questa cosa
    
    //genero l'elemento e gli do una classe
    let todoWrap = document.createElement('div')
    todoWrap.classList.add('todo')

    //prelevo il testo dal campo input e lo inserisco nel div appena generato
    let testo  = document.querySelector('#testo')
    todoWrap.innerText = x + ' ' + testo.value
    x++;

                    //creo un bottone cche mi servirà per eliminare il todo   
                    let close = document.createElement('button')
                    //gli do una classe per lo stile(da fare successivamente)
                    close.classList.add('closeButton')
                    //inserisco il testo del bottone
                    close.innerText = 'elimina'
                    
                    close.addEventListener('click',function(){
                        //todoWrap.remove()
                        close.parentNode.remove()
                    })
                    
                    
                    //inserisco il bottone generato dentro all'elemento creato alla linea 28
                    todoWrap.append(close)

                    


    //faccio si che l'elemento generato venga mostrato
    toDoArea.append(todoWrap)

    //svuotare il campo
    testo.value = ''

})