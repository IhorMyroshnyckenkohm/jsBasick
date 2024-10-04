function sequence(...fns) {
    return function(initialValue) {
        return fns.reduce((accumulator, currentFn) => currentFn(accumulator), initialValue);
    };
}

// Приклад функцій для використання:
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const subtract4 = (x) => x - 4;

// Використання функції sequence:
const combinedFunction = sequence(add2, multiply3, subtract4);

console.log(combinedFunction(5)); // ((5 + 2) * 3) - 4 = 19
