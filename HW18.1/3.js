async function sequenceAsync(asyncFunctions) {
  let result;

  for (const fn of asyncFunctions) {
    result = await fn(result);
  }

  return result;
}

const asyncFunctions = [
  async (prev) => (prev || 0) + 1,
  async (prev) => prev * 2,
  async (prev) => prev - 3,
];

sequenceAsync(asyncFunctions).then(console.log);
