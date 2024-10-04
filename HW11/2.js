function validate(fn, validator) {
    return function(...args) {
        for (const arg of args) {
            if (!validator(arg)) {
                throw new Error(`Invalid argument: ${arg}`);
            }
        }
        return fn(...args);
    };
}

// Приклад використання
const isPositive = (num) => num > 0;
const addPositiveNumbers = validate((a, b) => a + b, isPositive);

try {
    addPositiveNumbers(5, -3); // Викине виняток
} catch (error) {
    console.error(error.message); // Виведе: Invalid argument: -3
}
