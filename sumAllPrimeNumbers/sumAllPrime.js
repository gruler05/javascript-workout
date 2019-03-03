// Sum all prime numbers using recursion

const sumAllPrime = (num, sum = 0) => {
  if (num === 2 || num === 3 || (num % 2 !== 0 && num % 3 !== 0 && num > 1)) {
    sum = sum + num;
  }
  if (num === 1) {
    return sum;
  }
  return sumAllPrime(num - 1, sum);
};

console.log(sumAllPrime(11));
