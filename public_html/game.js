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

    setInterval(Huebrix.update, 1000/60);
};

Huebrix.update = function() {
    console.log("update loop!");
};
