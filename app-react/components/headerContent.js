import React from "react";
import AppContent  from "./content";

var arrObject = Array;

arrObject.prototype.random = function random() {

    "use strict";

    return this[Math.floor(Math.random() * this.length)];

};

var getOrders = function getOrders(ordersCount) {

    var orders = [];

    for (var i = 0; i < ordersCount; i++) {

        orders[i] = i + 1;

    }

    return orders;

};

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

var getBgColors = function getBgColors(colorsCount) {

    var bgColors = [];

    for (var i = 0; i < colorsCount; i++) {

        bgColors[i] = generateRandomColor(bgColors);

    }

    return bgColors;

};

export default React.createClass({
    handleClick: function (event) {
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
    },
    render: function () {
        return (
            <header>
                <nav className="content-width">
                    <div className="logo-section">
                    </div>
                    <ul>
                        <li>
                            <a href="#" onClick={this.handleClick} title="click me">Random</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
});