// reverseInt

const revInt = num => {
  return parseInt(
    [...num.toString()].reduce((acc, elem) => {
      return elem + acc;
    }, "")
  );
};

console.log(revInt(124));
