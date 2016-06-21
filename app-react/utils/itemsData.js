import ordersList from "./integersList";
import backgroundColorsList from "./randomColorsList";
import arrayPrototypeRandom from "./arrayPrototypeRandom";

var getItemsData = function getItemsData(object) {

    var data = [];
    var columnIndex;
    var columns = 4;

    object.map(function (objectData, index) {
        columnIndex = index % columns + 1;
        data.push({
            column: columnIndex > 0 ? columnIndex : 4,
            row: ( ( columns - index % columns ) / columns ) + index / columns,
            color: objectData.color,
            order: objectData.order
        });
    });
    return data;
};

var mountDefaultItems = function mountDefaultItems() {

    var backgroundColors = [
        "aliceblue", "aqua", "bisque", "blueviolet",
        "burlywood", "cadetblue", "chartreuse", "darkgoldenrod",
        "darkslateblue", "gold", "hotpink", "turquoise",
        "skyblue", "royalblue", "salmon", "teal"
    ];
    var defaultData = [];

    backgroundColors.map(function (color, index) {
        defaultData.push({
            color: color,
            order: 0
        });
    });

    return getItemsData(defaultData);

};

var randomDataForItems = function randomDataForItems() {

    var itemsLength = 16;
    var orders = ordersList.integersList(itemsLength);
    var backgroundColors = backgroundColorsList.randomColorsList(itemsLength);
    var randomOrder, indexForRemoving;
    var randomData = [];

    backgroundColors.map(function (color, index) {
        randomOrder = orders.random();
        randomData.push({
            color: color,
            order: randomOrder
        });
        indexForRemoving = orders.indexOf(randomOrder);
        orders.splice(indexForRemoving, 1);
    });

    return getItemsData(randomData);

};

export default {
    mountDefaultItems,
    randomDataForItems
};