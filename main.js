var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

// Game spritesheet
ASSET_MANAGER.queueDownload("./sprites/duck.png")
ASSET_MANAGER.queueDownload("./sprites/duck (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/blade_1_3.png")
ASSET_MANAGER.queueDownload("./sprites/blade_1_4.png")
ASSET_MANAGER.queueDownload("./sprites/blade_2_fix.png")
ASSET_MANAGER.queueDownload("./sprites/new_Spike_Strip.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Walk.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Walk (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Hurt.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Hurt (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Attack.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Slime_Attack (Reverse).png")
ASSET_MANAGER.queueDownload("./sprites/wolfsheet1.png")
ASSET_MANAGER.queueDownload("./sprites/floorsandwalls.png")
ASSET_MANAGER.queueDownload("./sprites/Button.png")
ASSET_MANAGER.queueDownload("./sprites/TempTextbox.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Hopper jump.png")
ASSET_MANAGER.queueDownload("./sprites/slimesprite/Hopper jump r.png")

// Sound file (music)
ASSET_MANAGER.queueDownload("./sound/BMG/World of Horror - Mode Select.mp3")
ASSET_MANAGER.queueDownload("./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3")
ASSET_MANAGER.queueDownload("./sound/BMG/World of Horror - Home (Extended).mp3")


// Sound effects

//Le Duck
ASSET_MANAGER.queueDownload("./sound/Duck sound/mixkit-boxer-getting-hit-2055.wav")
ASSET_MANAGER.queueDownload("./sound/Duck sound/Quack Sound Effect.mp3")

//Le Slime
ASSET_MANAGER.queueDownload("./sound/Slime sound/Slime Sounds (Minecraft) - Jump.mp3")
ASSET_MANAGER.queueDownload("./sound/Slime sound/Slime Sounds (Minecraft) - Landed.mp3")

//General Sound
ASSET_MANAGER.queueDownload("./sound/Sound effect/mixkit-arcade-mechanical-bling-210.wav")
ASSET_MANAGER.queueDownload("./sound/Sound effect/Punch - Gaming Sound Effect (HD).mp3")
ASSET_MANAGER.queueDownload("./sound/Sound effect/Ceil-door Open Sound.mp3")
ASSET_MANAGER.queueDownload("./sound/Sound effect/Bounce Sound Effect.mp3")
ASSET_MANAGER.queueDownload("./sound/Sound effect/Circular Saw Sound Effect.mp3")

ASSET_MANAGER.downloadAll(function () {
    
	ASSET_MANAGER.autoRepeat("./sound/BMG/World of Horror - Mode Select.mp3");
	//ASSET_MANAGER.autoRepeat("./sound/BMG/World of Horror Soundtrack Mansion Combat.mp3");

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
