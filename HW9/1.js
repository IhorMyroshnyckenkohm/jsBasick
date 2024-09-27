function isPrime(num) {
    if (num <= 1) return false; // 1 і числа менші за 1 не є простими
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Якщо є дільник, то це не просте число
    }
    return true;
}

function getPrimes(arr) {
    return arr.filter(isPrime); // Відфільтровуємо прості числа
}

// Приклад використання
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimes(numbers)); // [2, 3, 5, 7]
