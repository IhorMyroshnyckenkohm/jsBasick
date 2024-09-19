function uniqueValues(arr1, arr2) {
    let combinedArr = arr1.concat(arr2);
    let uniqueArr = [];

    for (let i = 0; i < combinedArr.length; i++) {
        if (!uniqueArr.includes(combinedArr[i])) {
            uniqueArr.push(combinedArr[i]);
        }
    }

    return uniqueArr;
}
console.log(uniqueValues([1, 2, 3], [2, 3, 4]));
// = [1, 2, 3, 4]
