// Max Character in a string;

const maxChar = str => {
  const arr = [...str];
  const count = {};
  let maxNum = 0;
  let maxChar = "";
  arr.forEach(elem => {
    count[elem] ? (count[elem] = count[elem] + 1) : (count[elem] = 1);
  });
  for (let prop in count) {
    if (maxNum === count[prop]) {
      maxChar = maxChar + "," + prop;
    }
    if (count[prop] > maxNum) {
      maxChar = prop;
      maxNum = count[prop];
    }
  }
  return maxChar;
};

console.log(maxChar("Javaassscript"));
