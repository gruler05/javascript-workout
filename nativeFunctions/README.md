# Native Higher Order Functions

Create a forEach, Map, Filter and Reduce without using Native functions

```
forEach([1, 2, 3], elem => test.push(elem + 1));

map([1,2,3], (elem) => elem + 1)

filter([1, 2, 3, 4], (elem) => elem > 2)

reduce([1,2,3], (acc,elem)=> { acc= elem + acc; return acc},0)
```

### [Solution](./nativeFunctions.js)
