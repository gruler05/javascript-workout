// Foreach

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const test = [];
forEach([1, 2, 3], elem => test.push(elem + 1));
// console.log(test)

// Native Map
const map = (arr, cb) => {
  const newArr = [];
  forEach(arr, elem => newArr.push(cb(elem)));
  return newArr;
};
// console.log(map([1,2,3], (elem) => elem + 1))

// Native Filter
const filter = (arr, cb) => {
  const newArr = [];
  forEach(arr, elem => {
    if (cb(elem)) {
      newArr.push(elem);
    }
  });
  return newArr;
};

// console.log(filter([1, 2, 3, 4], (elem) => elem > 2))

// Native Reduce
const reduce = (arr, cb, acc) => {
  let newAcc = acc;
  forEach(arr, elem => {
    newAcc = cb(newAcc, elem);
  });
  return newAcc;
};

// console.log(reduce([1,2,3], (acc,elem)=> { acc= elem + acc; return acc},0))
