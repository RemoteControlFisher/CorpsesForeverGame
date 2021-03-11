class title {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        //title sprite goes here
        ///this.spritesheet = ASSET_MANAGER.getAsset("./sprites/duck.png")
        
        /** 
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
            this.disconnect = false
            */
    };

    update() {
    };

    draw(ctx) {
            var width = 176;
            var height = 88;
 
            //ctx.drawImage(ASSET_MANAGER.getAsset("add a title screen!"), 2.5 *PARAMS.BLOCKWIDTH, 2 & PARAMS.BLOCKWIDTH, width * PARAMS.SCALE, height * PARAMS.SCALE);
            //ctx.fillStyle = this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 9.5 * PARAMS.BLOCKWIDTH ?" Grey" : "White";
            ctx.fillStyle = "Red";
            ctx.fillText("Start Game!", ctx.canvas.width/2, ctx.canvas.height/2);
            //console.log("I am drawing");
            //ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 10.5 * PARAMS.BLOCKWIDTH ?" Grey" : "White";
            //ctx.fillText("Options", 6.75 * PARAMS.BLOCKWIDTH, 10.5 & PARAMS.BLOCKWIDTH);
            //ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 11.5 * PARAMS.BLOCKWIDTH ?" Grey" : "White";
            //ctx.fillText("Help!", 6.75 * PARAMS.BLOCKWIDTH, 11.5 * PARAMS.BLOCKWIDTH);
            //ctx.fillStyle = this.game.mouse && this.game.mouse.y > 10 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 12.5 * PARAMS.BLOCKWIDTH ?" Grey" : "White";
            //ctx.fillText("Quit Game", 6.75 * PARAMS.BLOCKWIDTH, 12.5 * PARAMS.BLOCKWIDTH);
    };
};