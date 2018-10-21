const flattenDeep = ( arr ) => {
    if (arr instanceof Number) {
        return arr;
    }
}



console.log(flattenDeep([1, [[2], [3, [4]], 5]]));