var Huebrix = {};

var Huebrix.property = {
    size : 7,
    width : 640,
    height : 480
};

var Huebrix.utils.CreateArray = function (length) {
    var a = new Array(length || 0);

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < length; i++) {
            a[i] = Huebrix.utils.CreateArray.apply(this, args);
        }
    }

    return a;
}

var Huebrix.Entity = function () {

};

var Huebrix.Board = function() {

    var replenishCounter = 0;
    var replenishTimePerBlock = 30;

    return function() {
        var grid = Huebrix.utils.CreateArray(
            Huebrix.property.size, Huebrix.property.size);
        var replenishLine = Huebrix.utils.CreateArray(Huebrix.property.size);
    }
}

window.onload = function() {
    Huebrix.stage = new Kinetic.Stage({
        container : 'game',
        width : Huebrix.property.width,
        height : Huebrix.property.height
    });

    var gameLayer = new Kinetic.Layer();
    var gameBackground = new Kinetic.Rect({
        width : Huebrix.property.width,
        height : Huebrix.property.height,
        fill : 'black'
    });

    gameLayer.add(gameBackground);
    Huebrix.stage.add(gameLayer);

    setInterval(Huebrix.update, 1000/60);
};

Huebrix.update = function() {
    console.log("update loop!");
};
