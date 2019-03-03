// even and odds sum

const evenOddSum = arr => {
  let even = 0;
  let odd = 0;
  arr.map(elem => {
    if (elem % 2 === 0) {
      even = even + elem;
    } else {
      odd = odd + elem;
    }
  });
  return [even, odd];
};

console.log(evenOddSum([50, 60, 60, 45, 71]));
