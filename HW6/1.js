function doubleLetter(str) {
    return str.split('').map(char => char + char).join('');
}

console.log(doubleLetter('hello')); //
