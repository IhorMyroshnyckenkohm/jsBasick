function summarize(num) {
    return function(x = 1) {
        return num + x;
    };
}

// Приклад використання:
const add5 = summarize(5);
console.log(add5(3)); // 8
console.log(add5());  // 6
