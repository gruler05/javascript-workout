const flatObj = obj => {
  const clone = { ...obj };
  Object.keys(clone).forEach(key => {
    if (typeof clone[key] === 'object') {
      clone[key] = flatObj(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });
  return clone;
};
const obj = {
  first: 1,
  second: 2,
  third: {
    thirdest: {
      thirestest: 3
    },
    thirder: 4
  }
};
const cloned = flatObj(obj);

cloned.third.thirder = 6;
console.log(cloned, obj);
