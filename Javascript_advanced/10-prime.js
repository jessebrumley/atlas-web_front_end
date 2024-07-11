function countPrimeNumbers(max) {
  function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  let count = 0;

  for (let i = 1; i < max; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}
const start = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers(100);
  }
const end = performance.now();  

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
