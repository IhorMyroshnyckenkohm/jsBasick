async function intervalRace(functions, interval) {
  const results = [];

  for (let fn of functions) {
    await new Promise((resolve) => {
      setTimeout(() => {
        results.push(fn());
        resolve();
      }, interval);
    });
  }

  return results;
}

const funcs = [
  () => "Функція 1",
  () => "Функція 2",
  () => "Функція 3"
];

intervalRace(funcs, 1000).then((results) => console.log(results));
