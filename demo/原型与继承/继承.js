function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

function Students (name, age) {
    this.name = name;
    this.age = age;
}


Students.prototype = new Person();

let p = new Person('wuxue', 20);

let s = new Students('ninging', 18);

console.log(p.name);

s.sayName();