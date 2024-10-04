function counter(startValue, step) {
    let currentValue = startValue;

    function count() {
        return currentValue;
    }

    count.increment = function() {
        currentValue += step;
        return currentValue;
    };

    count.decrement = function() {
        currentValue -= step;
        return currentValue;
    };

    count.reset = function() {
        currentValue = startValue;
        return currentValue;
    };

    return count;
}

// Приклад використання:
const myCounter = counter(10, 2);
console.log(myCounter());        // 10
console.log(myCounter.increment()); // 12
console.log(myCounter.increment()); // 14
console.log(myCounter.decrement()); // 12
console.log(myCounter.reset());      // 10
