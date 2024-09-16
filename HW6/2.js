function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }
    let padding = symbol.repeat(length - str.length);
    return toLeft ? padding + str : str + padding;
}

console.log(padString('Ivan', 6, '*'));
console.log(padString('Ivan', 6, '*', true));
