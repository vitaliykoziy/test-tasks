import randomColor from "./randomColorHash";

var randomColorsList = function randomColorsList(amount) {

    var colorsList = [];

    for (var i = 0; i < amount; i++) {

        colorsList[i] = randomColor.generateRandomColor(colorsList);

    }

    return colorsList;

};

export default {
    randomColorsList
};