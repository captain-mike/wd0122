import SuperForms from "./Modules/SuperForms.js"

let nameOptions = {
    type: "text", name: 'nome', classes: 'form-control', id : 'nome'
}
let name = SuperForms.createHTMLInputElement(nameOptions)


let sf = new SuperForms()

sf.createHTMLInputElement(nameOptions)



document.querySelector('body').append(name);


