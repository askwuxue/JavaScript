function Person (name) {
    this.name = name;
}

Person.prototype.eat = function () {
    console.log('每个人都必须吃饭')
}

function Student (name, age) {
    // 在实例中调用构造函数，实现了继承
    Person.call(this, name);
    this.age = age;
}

Student.prototype = new Person();

Student.prototype.study = function () {
    console.log('学生必须要学习');
}

let p = new Person('炎黄子孙');

let s = new Student("炎黄子孙中的学生子弟", 18);

console.log(s.name, s.age);

console.log(p.name);

s.eat();

s.study();


