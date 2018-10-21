/* 
    判断对象是否为null 或者不是 object
    判断对象是 Array 还是 {}
    深拷贝只拷贝实例的方法，不拷贝原型上的方法
 */
function deepClond (obj) {
    if (!obj || typeof obj != 'object') {
        throw new Error('error');
    }
    // 判断当前的对象是[] 还是 {}
    let targetObj = obj.constructor === Array ? [] : {};
    // 循环遍历
    for (let key in obj) {
        // 只取实例上的
        if (obj.hasOwnProperty(key)) {
            // 对于引用类型继续递归，基本类型直接复制
            if (obj[key] && typeof obj[key] === 'object') {
                // targetObj[key] = obj[key].constructor === Array ? [] : {};
                targetObj[key] = deepClond(obj[key]);               
            } else {
                targetObj[key] = obj[key];
            }
        }
    }
    return targetObj;
}

let a = [
    {age: 20},
    [1,2,3],
    22
];

console.log(a);

let b = deepClond(a);

console.log(b);

b[0] = {age: 22};

console.log(b);

console.log(a);
