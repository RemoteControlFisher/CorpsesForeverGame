class buttons
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Button.png")
        this.button = [];
        this.button[0] = //Not pushed
            new animator(this.spritesheet, // Spritesheet
                94, //X
                65, //Y
                129, //Width
                24, //Height
                1, //Frames
                0.12, //Time
                16, //Padding
                false, //reverse
                true, // looping,
                null) //No idle animation because I am looping.
        this.button[1] = //Pushed
            new animator(this.spritesheet, // Spritesheet
                94, //X
                110, //Y
                129, //Width
                18, //Height
                1, //Frames
                0.12, //Time
                16, //Padding
                false, //reverse
                true, // looping,
                null) //No idle animation because I am looping.

	};

	update()
	{
        
	};

	draw(ctx)
	{
        this.button[0].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y, 0.5)
        this.button[1].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y + 50, 0.5)
	};
};