var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/duck.png")
ASSET_MANAGER.queueDownload("./sprites/blade_1_3.png")
ASSET_MANAGER.queueDownload("./sprites/blade_2_fix.png")
ASSET_MANAGER.queueDownload("./sprites/spike_strip.png")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new duck(gameEngine, "stand", 280, 280))
	gameEngine.addEntity(new traps(gameEngine, 80, 80))

	gameEngine.start();
});
