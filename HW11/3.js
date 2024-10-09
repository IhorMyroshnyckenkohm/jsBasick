function retry(fn, maxAttempts) {
  let attempts = 0;

  return function(...args) {
    if (attempts >= maxAttempts) {
      throw new Error(`Max ${maxAttempts} attempts reached`);
    }

    attempts++;
    return fn(...args);
  };
}

const exampleFn = (x) => x * 2;

const retriedFn = retry(exampleFn, 3);

console.log(retriedFn(2)); // 4
console.log(retriedFn(3)); // 6
console.log(retriedFn(4)); // 8
console.log(retriedFn(5)); // Throws error: Max 3 attempts reached
