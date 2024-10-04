function retry(fn, maxAttempts) {
    return async function(...args) {
        let attempts = 0;
        let lastError;

        while (attempts < maxAttempts) {
            try {
                return await fn(...args);
            } catch (error) {
                lastError = error;
                attempts++;
                console.log(`Attempt ${attempts} failed: ${error.message}`);
            }
        }

        throw lastError; // Повертаємо останню помилку
    };
}

// Приклад використання
const unreliableFunction = async () => {
    if (Math.random() < 0.5) throw new Error('Random error');
    return 'Success!';
};

const retriedFunction = retry(unreliableFunction, 5);

retriedFunction().then(console.log).catch(console.error);
