function duplicates(arr) {
    let quickSort = function  (list) {
        if (list.length === 0) return [];
        var lesser = [];
        var greater = [];
        var pivot = list[0];
        for (var i = 1; i < list.length; i++) {
            if (list[i] < pivot) {
                lesser.push(list[i]);
            } else {
                greater.push(list[i]);
            }
        }
        return quickSort(lesser).concat(pivot, quickSort(greater));
    }
    arr = quickSort(arr);
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return Array.from(new Set(newArr));
}

console.log(duplicates([1,2,4,4,3,3,1,5,3,8,9,4,6,7,1,3,5,4,6,8,4,23,1]));