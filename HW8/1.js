function capitalizeStrings(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

console.log(capitalizeStrings(['some_sting', 'and_second_string', 'and_last_string']))
