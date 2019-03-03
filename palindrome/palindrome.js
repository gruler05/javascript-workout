// Palindrome

const palindrome = str => {
  if (str === ReverseString(str)) {
    return true;
  } else return false;
};

console.log(palindrome("racecar"));
