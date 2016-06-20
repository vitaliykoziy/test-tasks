var generateRandomColor = function generateRandomColor(usedColors) {

    var usedColorsPrivate = usedColors;

    if (!usedColorsPrivate) {

        usedColorsPrivate = [];

    }

    var colorHash = "#";
    var possible = "0123456789ABCDEF";

    for (var i = 0; i < 6; i++) {

        colorHash += possible.charAt(
            Math.floor(Math.random() * possible.length)
        );

    }

    /* eliminate duplicates */
    if (usedColorsPrivate.indexOf(colorHash) !== -1) {

        colorHash = generateRandomColor(usedColorsPrivate);

    }

    return colorHash;

};

export default {
    generateRandomColor
};