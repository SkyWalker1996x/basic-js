const transform = (arr) => {
  let copyArr = [...arr];
  let newArr = [];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === "--discard-next") {
      copyArr[i + 1] = "err";
      i++;
    } else if (copyArr[i] === "--discard-prev") {
      if (newArr.length !== 0 && copyArr[i - 1] !== "err") newArr.pop();
    } else if (copyArr[i] === "--double-next") {
      if (i + 1 < copyArr.length) newArr.push(copyArr[i + 1]);
    } else if (copyArr[i] === "--double-prev") {
      if (newArr.length !== 0 && copyArr[i - 1] !== "err")
        newArr.push(newArr[newArr.length - 1]);
    } else {
      newArr.push(copyArr[i]);
    }
  }
  return newArr;
};

module.exports = transform;
