function Foo (name) {
    thi.name = name;
}

var f = new Foo('xxx');

var obj = {
    name: 'A',
    printName: function () {
        console.log(this.name);
    }
}

obj.printName();