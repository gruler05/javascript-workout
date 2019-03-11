# Deep Clone of Object

```
const obj = {
  first: 1,
  second: 2,
  third: {
    thirdest: {
      thirestest: 3
    },
    thirder: 4
  }
}
const cloned = flatObj(obj);

cloned.third.thirder = 6
console.log(cloned, obj);
```

The cloned object shouldn't be same as obj. As nested objects are copied by reference.

### [Solution](./deepClone.js)
