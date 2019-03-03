// Add all numbers

const addAll = (...args) => args.reduce((acc, elem) => acc + elem, 0);

console.log(addAll(1, 2, 3, 4, 5));
