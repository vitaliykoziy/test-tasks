import randomColor from './randomColorHash';

export default (amount) => {
  const colorsList = [];

  for (let i = 0; i < amount; i++) {
    colorsList[i] = randomColor(colorsList);
  }
  return colorsList;
};
