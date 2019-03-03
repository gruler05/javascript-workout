const testExpr = string => {
  const arrSet = ["[", "]", "(", ")", "{", "}"];
  const convertToChar = elem => Math.floor(elem.charCodeAt() / 10);
  let count = {};
  count[convertToChar("[")] = 0;
  count[convertToChar("{")] = 0;
  count[convertToChar("(")] = 0;
  const val = [...string].filter(elem => {
    return arrSet.indexOf(elem) !== -1;
  });
  for (let prop of val) {
    count[convertToChar(prop)]++;
  }
  return Object.values(count).every(elem => elem % 2 === 0 || elem === 0);
};

console.log(testExpr("[ a + (( b + c))]"));
