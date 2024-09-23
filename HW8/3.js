function analyzeArray(arr) {
    const numArr = arr.map(Number);
    // додаємо перетворення для забезпечення правильного результату якщо в параметрах цифри вказані як string
    const sum = numArr.reduce((acc, num) => acc + num, 0);
    const average = sum / numArr.length;

    let min = numArr[0];
    let max = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }

    return { sum, average, min, max };
}

console.log(analyzeArray([1, 2, 4, 3]));
