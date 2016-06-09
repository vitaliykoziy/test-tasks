Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

window.onload = init();

function init() {
//    setRandomOrderAndBgColorForItems();
}

function setRandomOrderAndBgColorForItems() {
    var items, orders, bg_colors, random_order, random_bg_color, index_for_removing, i;
    items = document.getElementsByClassName("item");
    orders = getOrders(items.length);
    bg_colors = getBgColors(items.length);

    for (i = 0; i < items.length; i++) {
        //random orders
        random_order = orders.random();
        index_for_removing = orders.indexOf(random_order);
        orders.splice(index_for_removing, 1);

        //random bg colors
        random_bg_color = bg_colors.random();
        index_for_removing = bg_colors.indexOf(random_bg_color);
        bg_colors.splice(index_for_removing, 1);

        //change styles of item
        items[i].style.order = random_order;
        items[i].style.backgroundColor = random_bg_color;
    }
}


function getOrders(orders_count) {
    var orders, i;
    orders = [];
    for (i = 0; i < orders_count; i++) {
        orders[i] = i + 1;
    }
    return orders;
}

function getBgColors(colors_count) {
    var bg_colors, i;
    bg_colors = [];
    for (i = 0; i < colors_count; i++) {
        bg_colors[i] = generateRandomColor(bg_colors);
    }
    return bg_colors;
}

function generateRandomColor(usedColors) {
    var color_hash, possible, i;
    if (!usedColors) {
        usedColors = [];
    }
    color_hash = "";
    possible = "0123456789ABCDEF";

    for (i = 0; i < 6; i++) {
        color_hash += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    /* eliminate duplicates */
    if (usedColors.indexOf('#' + color_hash) !== -1) {
        color_hash = generateRandomColor(usedColors);
    }
    return '#' + color_hash;
}

