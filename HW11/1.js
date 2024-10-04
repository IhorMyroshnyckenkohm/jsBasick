function logArguments(fn) {
    return function(...args) {
        console.log('Arguments:', args);
        return fn(...args);
    };
}

// Приклад використання
const sum = (a, b) => a + b;
const loggedSum = logArguments(sum);

loggedSum(3, 4); // Лог: Arguments: [3, 4]
