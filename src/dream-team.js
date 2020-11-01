const createDreamTeam = (members) => {
  if (!Array.isArray(members)) return false;

  const filterString = members.filter((item) => typeof item === "string");
  const modifiedArray = filterString.map((item) => {
    return item.trim()[0].toUpperCase();
  });
  const sortArray = modifiedArray.sort();

  return sortArray.join("");
};

module.exports = createDreamTeam;
