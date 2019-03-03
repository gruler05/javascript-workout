// Missing letters
// Stupid solution but works, you can use the sum of n number formula here as well n*(n+1)/2
const missingLetter = str => {
  let missingLetter = undefined;
  const arr = [...str];
  arr.forEach((elem, i) => {
    if (i + 1 < arr.length) {
      if (arr[i + 1].charCodeAt() - elem.charCodeAt() === 2) {
        missingLetter = String.fromCharCode(elem.charCodeAt() + 1);
      }
    }
  });
  return missingLetter;
};

console.log(missingLetter("abcdefghjklmnop"));
