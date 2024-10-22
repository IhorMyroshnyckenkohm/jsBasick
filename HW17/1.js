function randomDelayPrint(message) {
    [...message].forEach((char, index) => {
        const delay = Math.random() * 1000;
        setTimeout(() => {
            process.stdout.write(char);
        }, delay * index);
    });
}

randomDelayPrint("Hello, World!");
