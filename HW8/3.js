function analyzeArray(arr) {
    const numArr = arr.map(Number);
    // додаємо перетворення для забезпечення правильного результату якщо в параметрах цифри вказані як string
    const sum = numArr.reduce((acc, num) => acc + num, 0);
    const average = sum / numArr.length;
    const min = Math.min(...numArr);
    const max = Math.max(...numArr);
    return { sum, average, min, max };
}

console.log(analyzeArray(['1', '2', '4', '3']));
