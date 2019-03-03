// Anagram

const anagram = (str1, str2) => {
  const strArr1 = [...str1.toLowerCase()].sort().join("");
  const strArr2 = [...str2.toLowerCase()].sort().join("");
  if (strArr1 === strArr2) {
    return true;
  } else {
    return false;
  }
};

console.log(anagram("elbow", "below"));
