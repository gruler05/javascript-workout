# Count the vowel / Print the common vovel

For a given string, the function returns a string describing the most common vovels in the input string

`${vovel} appears ${count} time${s}`

- if there is a tie, the preceding string should be formed for each vowel that ties for the maximum. Ties should sort alphabetically before being delimited with newlines
- vowels that do not appear should not be mentioned
- there should be no new line at the end

```
countVovel('lexicon');
// e appears 1 time
// i appears 1 time
// o appears 1 time

commonVovel('waduuu hek');
// u appears 3 times
```

### [Solution](./countVowels.js)
