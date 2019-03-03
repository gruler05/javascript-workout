// Flattened Array

const flatArr = arr => {
  return [].concat(
    ...arr.map(elem => {
      if (Array.isArray(elem)) {
        return flatArr(elem);
      } else {
        return elem;
      }
    })
  );
};

console.log(flatArr([1, [1, 2, 3], [4, [5]]]));
