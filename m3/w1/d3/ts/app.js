var Test = /** @class */ (function () {
    //public id:number; siccome ho usato readonly tra gli argomenti del costruttore devo eliminare questa riga o me la segnerà come duplicato
    function Test(name, id) {
        this.id = id;
        this.email = "test@example.com";
        this.name = name;
        this.id = id;
    }
    Test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error("Email già esistente");
        }
        this.email = email;
    };
    return Test;
}());
var x = new Test('Giovanna', 1);
x.checkEmail('test2@example.com');
console.log(x.id, x.name, x.email);
//x.id = 5; non posso
function add(a) {
    return a;
}
var res = add('ciao');
console.log(res);
var res2 = add(654);
console.log(res2);
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.arr = [];
    }
    CustomArray.prototype.getItems = function () {
        return this.arr;
    };
    CustomArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    CustomArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        if (start != -1) {
            this.arr.splice(start, 1);
        }
    };
    CustomArray.prototype.removeItem2 = function (item) {
        this.arr = this.arr.filter(function (i) { return i !== item; });
    };
    return CustomArray;
}());
var array = new CustomArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem2('ciao2');
console.log(array.getItems());
var arrayNum = new CustomArray();
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
arrayNum.removeItem(2);
console.log(arrayNum.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 5,
    value: 0
};
//TUPLE
var user = [1, 'Giovanna'];
var id = user[0], nome = user[1]; //non confondere con assegnamento in destrutturazione
console.log(id, nome);
//matrici di TUPLE
var userArr = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user
];
userArr.push([4, 'Sara']);
console.log(userArr);
var arr = ['ciao'];
var arr2 = ['ciao', 'ciao2'];
//# sourceMappingURL=app.js.map