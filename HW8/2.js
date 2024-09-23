function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

console.log(findCommonElements(['asd', 'das', 'sss', 'sad'], ['asd', 'das', 'dsa']))
