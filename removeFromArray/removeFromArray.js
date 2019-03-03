// Remove from the array whatever is in the arguments

const removeArrElm = (arr, ...args) => {
  return arr.filter(elem => !args.includes(elem));
};

console.log(removeArrElm([1, 2, 3, "hello", "world"], 2, "hello"));
