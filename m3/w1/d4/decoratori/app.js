"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(f) {
    console.log('...loading');
    console.log(f);
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creazione persona');
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
function AddMethod(target) {
    console.log(target);
    target.prototype.saluta = function () {
        console.log('ciao');
    };
    target.prototype.nome = 'Max';
}
let Test = class Test {
    saluta() {
    }
};
Test = __decorate([
    AddMethod
], Test);
let x = new Test();
console.log(x);
x.saluta();
//# sourceMappingURL=app.js.map