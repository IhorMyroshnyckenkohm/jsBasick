async function concurrentPromises(promises, maxConcurrent) {
    const results = [];
    const executing = new Set();

    for (const promise of promises) {
        const task = promise.then((result) => {
            executing.delete(task);
            return result;
        });

        results.push(task);
        executing.add(task);

        if (executing.size >= maxConcurrent) {
            await Promise.race(executing); // Очікуємо завершення хоча б одного промісу
        }
    }

    return Promise.all(results); // Очікуємо завершення всіх промісів
}

const samplePromises = [
    () => new Promise((res) => setTimeout(() => res(1), 1000)),
    () => new Promise((res) => setTimeout(() => res(2), 2000)),
    () => new Promise((res) => setTimeout(() => res(3), 1500)),
    () => new Promise((res) => setTimeout(() => res(4), 500)),
];

concurrentPromises(samplePromises.map(fn => fn()), 2).then(console.log);
