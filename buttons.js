class buttons
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Button.png")
        this.state = "not pushed"
        this.button = [];
        this.button["not pushed"] = //Not pushed
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
        this.button["pushed"] = //Pushed
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
      this.updateBB(1)
      this.collide()
	};

    updateBB(scale) {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x + 7 * scale, this.y + 1 * scale, 52 * scale, 10 * scale);
	}
    
    collide(){
        var that = this;
		
    }

	draw(ctx)
	{
         this.button[this.state].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 0.5)
        //this.button[0].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, 0.5)
        //this.button[1].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y + 50 - this.game.camera.y, 0.5)

        ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};
};