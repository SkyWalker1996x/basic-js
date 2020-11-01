const countCats = (matrix) => {
  let counter = 0;

  matrix.forEach((item) => {
    item.forEach((subItem) => {
      counter = subItem === "^^" ? counter + 1 : counter;
    });
  });

  return counter;
};

module.exports = countCats;
