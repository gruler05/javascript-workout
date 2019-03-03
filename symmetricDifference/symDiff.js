const sym = (...args) => {
  let removeDuplicates = [];
  [...args].filter(elem => removeDuplicates.push([...new Set(elem)]));
  const newArray = [].concat(...removeDuplicates);

  const test = newArray.filter(
    elem => newArray.indexOf(elem) === newArray.lastIndexOf(elem)
  );
  console.log(test);
  return test;
};

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
