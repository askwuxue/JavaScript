// 这里只给出第一个参数
Function.prototype.myCall = function (context) {
    // 如果不传第一个参数，默认是window
    context = context || window;
    context.fn = this;
    // 将后面的参数取出
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    // 删除fn
    delete context.fn;
    return result;
}

let a = {
    value: 1
};

function getValue (name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

console.log(getValue('aaaaa', 'bbbbbb').myCall(a,'ccccccc'));