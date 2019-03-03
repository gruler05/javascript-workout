const capitalizeFirst = str => {
  return str
    .split(" ")
    .reduce((acc, elem) => {
      const [first, ...rest] = elem;
      // console.log(first, rest);
      acc.push(`${first.toUpperCase()}${rest.join("")}`);
      return acc;
    }, [])
    .join(" ");
};

console.log(capitalizeFirst("hello world lol"));
