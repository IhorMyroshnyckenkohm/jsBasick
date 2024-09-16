function camelCase(str, separator) {
    return str.split(separator).map((word, index) => {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

console.log(camelCase('hello_world', '_'));
console.log(camelCase('make-it-camel', '-'));
