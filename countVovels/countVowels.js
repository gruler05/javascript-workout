// If you want to just count the vovel then just return the vovelCount from the function

const countVowel = str => {
  const vovelArr = ['a', 'e', 'i', 'o', 'u'];
  const vovelCount = {};
  const strArr = [...str.toLowerCase()];

  strArr.forEach(elem => {
    if (vovelArr.includes(elem) && vovelCount[elem]) {
      vovelCount[elem] += 1;
    } else {
      if (vovelArr.includes(elem)) {
        vovelCount[elem] = 1;
      }
    }
  });
  const maxCount = Math.max.apply(null, Object.values(vovelCount));
  const isPlural = maxCount > 1 ? 'times' : 'time';
  let opStr = '';
  Object.entries(vovelCount)
    .sort()
    .forEach(elem => {
      if (elem[1] === maxCount) {
        opStr = opStr + `${elem[0]} appears ${elem[1]} ${isPlural}\n`;
      }
    });
  return opStr.substring(0, opStr.length - 1);
};

console.log(countVowel('lexicon'));
