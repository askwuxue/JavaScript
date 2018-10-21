/* 
JSON能都实现深拷贝得益于两个全局函数
JSON.parse()    将JSON字符串反序列为json对象
JSON.stringify()    将JavaScript对象序列化为一个JSON字符串
 */
function deepClone (obj) {
    return JSON.parse(JSON.stringify(obj));
}

const obj = {
    arr: [1,2,3],
    obj: {
        key: 'value'
    },
    func: function() {
        return 1;
    }
}

// const obj2 = [
//     [1,2,3],
//     {key: 'value'},
//     123
// ]
const obj2 = deepClone(obj);

obj2.arr[0] = 5;

console.log(deepClone(obj));

// console.log(deepClone(obj2));
