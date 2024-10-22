function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function findPalindrome(num) {
    let steps = 0;
    let current = num;

    while (true) {
        let reversed = reverseNumber(current);
        current += reversed;
        steps++;

        if (isPalindrome(current)) {
            return { result: current, steps };
        }
    }
}

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

console.log(findPalindrome(196));
