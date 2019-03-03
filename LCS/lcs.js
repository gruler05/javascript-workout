const LCS = (str1, str2) => {
  const arr1 = [...str1];
  const arr2 = [...str2];

  let start2 = 0;
  let str = "";
  for (let i = 0; i < arr1.length; i++) {
    const char1 = arr1[i];
    for (let j = start2; j < arr2.length; j++) {
      if (char1 === arr2[j]) {
        str = str + char1;
        start2 = j + 1;
        continue;
      }
    }
  }
  // console.log(str)
  return str;
};
const str1 = "ABCDGH";
const str2 = [...str1];
const test = [];
for (let i = 0; i < 6; i++) {
  if (i > 0) {
    str2.shift();
  }
  const str = i > 0 ? str2.join("") : str1;
  test.push(LCS(str, "AEDFHR"));
}

console.log(
  test.reduce((acc, elem) => (acc.length < elem.length ? elem : acc))
);
