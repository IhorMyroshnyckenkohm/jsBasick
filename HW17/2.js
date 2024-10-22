function debounce(callback, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(...args), delay);
    };
}

const log = debounce((message) => console.log(message), 1000);

log("Перше повідомлення");
log("Друге повідомлення");
