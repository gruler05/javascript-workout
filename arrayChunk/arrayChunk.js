// Chunk
const chunkArr = (arr, num) => {
  let count = 0;
  const test = [];

  arr.map((elem, i) => {
    if (i > 0 && i % num === 0) {
      count++;
    }
    if (!test[count]) {
      test.push([elem]);
    } else {
      test[count].push(elem);
    }
  });
  return test;
};

console.log(chunkArr([1, 2, 3, 4, 5], 2));
