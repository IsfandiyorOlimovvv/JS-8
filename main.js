function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return false;
}

for (let i = 2; i <= 50; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

let n = 8;

for (let i = n - 1; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i ** 3);
}