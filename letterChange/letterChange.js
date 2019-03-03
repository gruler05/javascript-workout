// Letter Changes : change every letter to the next one and capitalize vovels

const letterChange = str => {
  const strArr = [...str.toLowerCase()].map(elem => elem.charCodeAt());
  const vovels = ["a", "e", "i", "o", "u"].map(elem => elem.charCodeAt());
  const changedLetter = [];
  strArr.map(elem => {
    if (vovels.includes(elem)) {
      changedLetter.push(elem - 32); //the difference b/w lowercase and uppercase
    } else {
      const noSpaceChange = elem === 32 ? elem : elem + 1;
      changedLetter.push(noSpaceChange);
    }
  });
  return changedLetter.map(elem => String.fromCharCode(elem)).join(" ");
  // console.log(changedLetter)
};

console.log(letterChange("hello world, skrra"));
