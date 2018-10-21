function sum(arr) {
    let result = arr.reduce((prev, curr) => {
        return prev + curr;
    })
    return result;
}

console.log(sum([1, 2, 3]));


function sum (arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}