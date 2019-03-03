const countBy = (arr, val) => {
  const isLength = typeof val === "function" ? false : true;
  return arr.reduce((acc, elem) => {
    let prop;
    if (isLength && val === "length") {
      prop = elem.length;
    } else {
      prop = val(elem);
    }
    if (!acc[prop]) {
      acc[prop] = 1;
    } else {
      acc[prop] = acc[prop] + 1;
    }
    return acc;
  }, {});
};
