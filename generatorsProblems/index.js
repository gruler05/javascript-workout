function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
let one = generator.next();
console.log(JSON.stringify(one));
