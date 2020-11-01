const repeater = (str, options) => {
  if (str == null) str = "null";
  if (options.additionRepeatTimes !== undefined) {
    let arrItem = [];
    if (options.addition !== undefined) {
      let item3 = options.addition == null ? "null" : options.addition;
      for (let i = 0; i < options.additionRepeatTimes; i++) arrItem.push(item3);
    }
    let item2 =
      options.additionSeparator !== undefined ? options.additionSeparator : "|";
    str += arrItem.join(item2);
  } else if (options.addition !== undefined) str += options.addition;

  if (options.repeatTimes) {
    let item = options.separator ? options.separator : "+";
    let arrResult = [];
    for (let i = 0; i < options.repeatTimes; i++) arrResult.push(str);
    str = arrResult.join(item);
  }
  return str;
};

module.exports = repeater;
