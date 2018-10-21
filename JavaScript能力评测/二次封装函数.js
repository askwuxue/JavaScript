// function partialUsingArguments(fn) {
//     let args1 = Array.prototype.splice.call(arguments, 1);
//     // let that = this;
//     let result = function () {
//         let args2 = Array.prototype.aplice.call(arguments);
//         let args = args1.concat(args2);
//         return fn.apply(this, args);
//     }
//     return result;
// }




function partialUsingArguments(fn) {
    var args1 = Array.prototype.splice.call(arguments, 1);

    var result = function () {
        return fn.apply(this, args1.concat(Array.prototype.splice.call(arguments, 0)));
    }
    return result;
}