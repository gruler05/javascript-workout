//  Sort by height without sorting -1

const sortByHeight = arr => {
  const clonedArr = [...arr];
  const arrToBeSorted = [];
  arr.map((elem, i) => (elem === -1 ? "" : arrToBeSorted.push(elem)));
  arrToBeSorted.sort();
  let count = 0;
  arr.map((elem, i) => {
    if (elem !== -1) {
      clonedArr[i] = arrToBeSorted[count];
      count++;
    }
  });
  return clonedArr;
};

console.log(sortByHeight([-1, 150, 190, 130, -1, -1, 11]));
