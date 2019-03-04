const binaryGap = function solution(N) {
    let binary = N.toString(2);
    let count = false;
    let record = false;
    let val = 0;
    let values = [];
    for (let i = 0; i < binary.length; i++) {
      if (!count && binary.charAt(i) === "1") {
        count = true;
      } else if (count && binary.charAt(i) === "0") {
        val++;
      } else if (count && binary.charAt(i) === "1") {
        values.push(val);
        val = 0;
      }
    }
    return values.length ? Math.max(...values) : 0;
  };
