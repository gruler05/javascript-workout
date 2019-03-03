// Longest word

const longestWord = sentence => {
  const wordArr = sentence.split(" ");
  let count = 0;
  let longWord = "";

  wordArr.map(elem => {
    //Had to check the regex as i am not good at it
    const removedPunctuations = elem.replace(/[^a-zA-Z]/g, "");
    if (removedPunctuations.length > count) {
      count = removedPunctuations.length;
      longWord = removedPunctuations;
    } else {
      if (removedPunctuations.length === count) {
        longWord = `${longWord} ${removedPunctuations}`;
      }
    }
  });
  return longWord;
};

console.log(longestWord("Hello world, what the fuck?!"));
