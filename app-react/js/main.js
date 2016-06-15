/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-implicit-globals: 0 */
/* eslint no-plusplus: 0 */
/* eslint id-length: 0 */
/* eslint one-var: 0 */
/* eslint no-magic-numbers: 0 */
/* eslint vars-on-top: 0 */
/* eslint max-statements: 0 */
/* eslint object-shorthand: ["error", "always", { "avoidQuotes": true }] */
var arrObject = Array;

arrObject.prototype.random = function random () {

    "use strict";

    return this[Math.floor(Math.random() * this.length)];

};

window.setStyles = (function setStyles () {

    "use strict";

    var getOrders = function getOrders (ordersCount) {

        var orders = [];

        for (var i = 0; i < ordersCount; i++) {

            orders[i] = i + 1;

        }

        return orders;

    };

    var generateRandomColor = function generateRandomColor (usedColors) {

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

    var getBgColors = function getBgColors (colorsCount) {

        var bgColors = [];

        for (var i = 0; i < colorsCount; i++) {

            bgColors[i] = generateRandomColor(bgColors);

        }

        return bgColors;

    };

    var init = function init () {

        var items = document.getElementsByClassName("item");
        var orders = getOrders(items.length);
        var bgColors = getBgColors(items.length);

        for (var i = 0; i < items.length; i++) {

            // random orders
            var randomOrder = orders.random();
            var indexForRemoving = orders.indexOf(randomOrder);

            orders.splice(indexForRemoving, 1);

            // random bg colors
            var randomBgColor = bgColors.random();

            indexForRemoving = bgColors.indexOf(randomBgColor);
            bgColors.splice(indexForRemoving, 1);

            // change styles of item
            items[i].style.order = randomOrder;
            items[i].style.backgroundColor = randomBgColor;

        }

    };

    return {
        "init": init
    };

}());
