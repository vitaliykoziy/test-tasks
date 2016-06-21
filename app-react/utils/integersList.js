const integersList = function integersList(amount) {
  const list = [];

  for (let i = 0; i < amount; i++) {
    list[i] = i + 1;
  }
  return list;
};

export default {
  integersList,
};
