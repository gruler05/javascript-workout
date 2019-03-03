function solution(A) {
  const countArr = [];
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] + A[j] === 7) {
        count = count + 2;
      } else {
        if (A[i] !== A[j]) {
          count = count + 1;
        }
      }
    }
    countArr.push(count);
  }
  return Math.min.apply(null, countArr);
}
