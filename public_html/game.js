var Huebrix = {};

window.onload = function() {
    var gameWidth = 640;
    var gameHeight = 480;

    Huebrix.stage = new Kinetic.Stage({
        container:'game',
        width:gameWidth,
        height:gameHeight
    });

    var gameLayer = new Kinetic.Layer();
    var gameBackground = new Kinetic.Rect({
        width:gameWidth,
        height:gameHeight,
        fill:'black'
    });

    gameLayer.add(gameBackground);
    Huebrix.stage.add(gameLayer);

    window.setTimeout(1000, Huebrix.update);
};

Huebrix.update = function() {
    print("hi");
    window.setTimeout(50, Huebrix.update);
};