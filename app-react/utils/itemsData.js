import ordersList from './integersList';
import backgroundColorsList from './randomColorsList';
import './arrayPrototypeRandom';

const getItemsData = function getItemsData(object) {
  const data = [];
  const columns = 4;

  object.map((objectData, index) => {
    const columnIndex = index % columns + 1;
    return data.push({
      column: columnIndex > 0 ? columnIndex : 4,
      row: ((columns - index % columns) / columns) + index / columns,
      color: objectData.color,
      order: objectData.order,
    });
  });
  return data;
};

const mountDefaultItems = () => {
  const backgroundColors = [
    'aliceblue', 'aqua', 'bisque', 'blueviolet',
    'burlywood', 'cadetblue', 'chartreuse', 'darkgoldenrod',
    'darkslateblue', 'gold', 'hotpink', 'turquoise',
    'skyblue', 'royalblue', 'salmon', 'teal',
  ];
  const defaultData = [];

  backgroundColors.map((color) => (
     defaultData.push({
       color,
       order: 0,
     })
    )
  );
  return getItemsData(defaultData);
};

const randomDataForItems = () => {
  const itemsLength = 16;
  const orders = ordersList.integersList(itemsLength);
  const backgroundColors = backgroundColorsList(itemsLength);
  const randomData = [];
  let randomOrder;
  let indexForRemoving;


  backgroundColors.map((color) => {
    randomOrder = orders.random();
    indexForRemoving = orders.indexOf(randomOrder);
    orders.splice(indexForRemoving, 1);
    return randomData.push({
      color,
      order: randomOrder,
    });
  });
  return getItemsData(randomData);
};

export {
  mountDefaultItems,
  randomDataForItems,
};
