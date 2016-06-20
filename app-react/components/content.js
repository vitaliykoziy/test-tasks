import React from "react";
import ItemTemplate  from "./itemTemplate";

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

export default React.createClass({
    statics: {
        mountDefaultItems: function () {

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

        },
        randomData: function () {

            var itemsLength = 16;
            var orders = getOrders(itemsLength);
            var backgroundColors = getBgColors(itemsLength);
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

        }
    },

    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div className="content">
                <section className="content-width">
                    {
                        this.props.items.map(function (item, index) {
                            return (
                                <ItemTemplate
                                    backgroundColor={item.color}
                                    order={item.order}
                                    column={item.column}
                                    row={item.row}
                                    key={index}
                                />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
});