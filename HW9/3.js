function group(arr, callback) {
    return arr.reduce((acc, item) => {
        const key = callback(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

// Приклад використання
const numbers = [1, 2, 3, 4, 5, 6];
const grouped = group(numbers, num => (num % 2 === 0 ? 'even' : 'odd'));

console.log(grouped);
/*
{
  odd: [1, 3, 5],
  even: [2, 4, 6]
}
*/
