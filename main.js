var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/duck.png")
ASSET_MANAGER.queueDownload("./sprites/blade_1_3.png")
ASSET_MANAGER.queueDownload("./sprites/blade_2_fix.png")
ASSET_MANAGER.queueDownload("./sprites/spike_strip.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Walk.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Walk (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Hurt.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Hurt (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Attack.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Hurt (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/wolfsheet1.png")
ASSET_MANAGER.queueDownload("./sprites/floorsandwalls.png")
ASSET_MANAGER.queueDownload("./sprites/Button.png")
ASSET_MANAGER.queueDownload("./sprites/TempTextbox.png")


ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new scenemanager(gameEngine);
    /*
	for (i = 0; i < 16; i++) {
		for (j = 0; j < 16; j++) {
			gameEngine.addEntity(new background(gameEngine, 188 + 32 * i - 32, 400 -32*j, "bwall"))
		}
	}

	gameEngine.addEntity(new Hoppers(gameEngine, 400, 600))
	gameEngine.addEntity(new traps(gameEngine, 80, 80, "saw"))
	gameEngine.addEntity(new Chompers(gameEngine, 400, 500))
	for (i = 0; i < 16; i++) {
		gameEngine.addEntity(new floorsandwalls(gameEngine, 188 + 32 * i - 32, 400, "floor"))
	}

	for (i = 0; i < 16; i++) {
		gameEngine.addEntity(new floorsandwalls(gameEngine, 188 - 32 * 2, 400 - 32 * i, "wright"))
	}
	gameEngine.addEntity(new floorsandwalls(gameEngine, 220, 368, "floor"))
	gameEngine.addEntity(new doors(gameEngine, 450, 450))
	gameEngine.addEntity(new corpses(gameEngine, 640, -1000, "duck"))
	gameEngine.addEntity(new corpses(gameEngine, 540, 0, "chomper"))

	gameEngine.addEntity(new boxes(gameEngine, 500, 400 - 32))
	gameEngine.addEntity(new buttons(gameEngine, 100, 450))

	gameEngine.addEntity(new duck(gameEngine, "stand", 280, 280)) 
	gameEngine.addEntity(new textboxes(gameEngine, 0, 0)) */
	gameEngine.start();
	
});
