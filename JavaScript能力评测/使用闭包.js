function makeClosures(arr, fn) {
 var result = [];
 for (var i = 0; i < arr.length; i++) {
     result[i] = function (num) {
        return function () {
            return fn(num);
        }
     }(arr[i]);
 }
 return result;
}