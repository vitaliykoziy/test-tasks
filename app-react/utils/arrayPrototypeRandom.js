var arrObject = Array;

arrObject.prototype.random = function random() {

    "use strict";

    return this[Math.floor(Math.random() * this.length)];

};