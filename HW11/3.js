function retry(fn, maxAttempts) {
  return function (...args) {
    let result;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      result = fn(...args);
    }
    return result;
  };
}


const exampleFn = (x) => x * 2;

const retriedFn = retry(exampleFn, 3);
console.log(retriedFn(5)); 
