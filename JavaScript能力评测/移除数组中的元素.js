// function remove(arr, item) {

//     let newArr = [...arr];

//     newArr = newArr.filter((ite, index) => {
//         return item != ite;
//     });

//     return newArr;
// }


// console.log(remove([1,2,3,4,5,5], 5));

// function removeWithoutCopy (arr, item) {
//     for (var i = 0; i < arr.length; i++) {
//         if (item == arr[i]) {
//             arr.splice(i, 1);
//             --i;
//         }
//     }
//     return arr;
// }

// console.log(remove([1,2,2,3,4], 2));


function remove (arr, item) {
    var tempArr = [];
    for (var j = 0; j < arr.length; j++) {
        tempArr[j] = arr[j];
    }

    for (var i = 0; i < tempArr.length; i++) {
        if (item == tempArr[i]) {
            tempArr.splice(i, 1);
            --i;
        }
    }
    return tempArr;
}