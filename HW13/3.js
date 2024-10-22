function generatePermutations(array) {
    const result = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr, m.concat(next));
            }
        }
    }

    permute(array);
    return result;
}

console.log(generatePermutations([1, 2, 3]));
