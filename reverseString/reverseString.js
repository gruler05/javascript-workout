// Reverse String

const ReverseString = str => {
  return [...str].reduce((acc, elem) => {
    return elem + acc;
  }, "");
};

console.log(ReverseString("Hello"));
