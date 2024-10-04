function memoize(fn, cacheLimit) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        if (Array.from(cache.values()).includes(result)) {
            return result;
        }

        if (cache.size >= cacheLimit) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }

        cache.set(key, result);

        return result;
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add, 3);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
