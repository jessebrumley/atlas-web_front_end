async function main() {
  const promises = Array.from({ length: 100 }, () => countPrimeNumbers(100));

  await Promise.all(promises);
}

function countPrimeNumbers(max) {
  return new Promise((resolve) => {
    let count = 0;

    for (let i = 1; i < max; i++) {
      if (isPrime(i)) {
        count++;
      }
    }

    resolve(count);
  });
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

const start = performance.now();

main().catch(console.error);

const end = performance.now();

console.log(`Execution time of the entire operation was ${end - start} milliseconds.`);
