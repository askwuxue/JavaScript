// function indexOf(arr, item) {
//     let ret = arr.findIndex((ite, index, arr) => {
//         return ite == item;
//     });

//     return ret;
// }


// console.log(indexOf([1, 2, 3], 4));

    function indexOf (arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (item == arr[i]) {
                return i;
            }
        }
        return -1;
    }