class background {
	constructor(game, x, y, type) {
		Object.assign(this, { game, x, y , type});
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/floorsandwalls.png");
        this.animations = []
        this.scales = []

        this.animations["bwall"] = 
			new animator(this.spritesheet,
				0, //X
				49, //Y
				16, //Width
				16, //Height
				1, //Frames
				0.12, //Time
				12, //Pading
				false,
				true,
                null)
        this.scales["bwall"] = 2
    }

    update() {

	};

	draw(ctx) {
		this.animations[this.type].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, this.scales[this.type])
	};
}