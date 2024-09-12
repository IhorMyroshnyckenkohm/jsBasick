function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversed += cleanedStr[i];
    }
    return cleanedStr === reversed;
}

console.warn(isPalindrome('asa asa tut asa asa'))
