class goal {
    constructor(game, x, y, level, scene) {
        y= y-8
        Object.assign(this, { game, x, y, level, scene });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
        this.rsheet = ASSET_MANAGER.getAsset("./sprites/duck (Reverse).png")
        this.isGoal

        this.fAnimation = new animator(this.spritesheet,
            139, //X
            283, //Y
            13, //Width
            20, //Height
            1, //Frames
            0.12, //Time
            16, //Padding
            false, //reverse
            true, // looping,
            null)

        this.cAnimation = new animator(this.rsheet, 
            298, //X
            284, //Y
            16, //Width
            19, //Height
            1, //Frames
            0.12, //Time
            16, //Padding
            false, //reverse
            true, // looping,
            null)

        this.bAnimation = new animator(this.rsheet,
            235, //X
            283, //Y
            13, //Width
            20, //Height
            1, //Frames
            0.12, //Time
            16, //Padding
            false, //reverse
            true, // looping,
            null)
        
            this.BB = new boundingBox(this.x +28, this.y+2, 32, 38)
    };

    update() {
        if (this.scene.duck.BB.isCollide(this.BB)) {
            this.scene.loadlevel(this.level)
        }
    };

    draw(ctx) {
		this.fAnimation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x , this.y - this.game.camera.y, 2);
		this.cAnimation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x +28, this.y - this.game.camera.y+2, 2);
		this.bAnimation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x +64, this.y - this.game.camera.y, 2);
        ctx.strokeStyle = 'Red';
	    ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
    };
};