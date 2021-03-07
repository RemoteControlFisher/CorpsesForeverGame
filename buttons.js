class buttons
{
	constructor(game, x, y, myDoors, myDText)
	{
		Object.assign(this, {game, x, y, myDoors, myDText});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Button.png")
        this.state = "not pushed"
        this.duckPushed = false
        this.corpsePushed = false
        this.boxPushed = false
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
                104, //Y
                129, //Width
                24, //Height
                1, //Frames
                0.12, //Time
                16, //Padding
                false, //reverse
                true, // looping,
                null) //No idle animation because I am looping.

	};

	update()
	{
      this.updateBB(.75)
      this.collide()
      if (this.duckPushed || this.corpsePushed || this.boxPushed) {
          this.state = "pushed"
          this.myDoors.forEach(function (door) {
              door.open = true
          });
          this.myDText.forEach(function (dtext) {
            dtext.enabled = true
          });
      }
      else {
        this.state = "not pushed"
        this.myDoors.forEach(function (door) {
            door.open = false
        });
        this.myDText.forEach(function (dtext) {
            dtext.enabled = false
        });
      }
	};

    updateBB(scale) {
		this.oldBB = this.BB;
		this.BB = new boundingBox(this.x, this.y, 129 * scale, 24 * scale);
	}
    
    collide(){
        this.corpsePushed = false
        var that = this;
		this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.isCollide(entity.BB)) {
                if (entity.platform && entity.droppable && entity.state != "carried") {
                    that.corpsePushed = true
                }
            }
            else if (entity.BB && !that.BB.isCollide(entity.BB)) {
                if (entity.platform && entity.droppable && entity.state != "carried" && that.corpsePushed != true) {
                    that.corpsePushed = false
                }
            }
        });
    }

	draw(ctx)
	{

        this.button[this.state].drawFrame(this.game.clockTick, ctx, this.x  - this.game.camera.x, this.y - this.game.camera.y, .75) 
        ctx.strokeStyle = 'Red';
		ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
	};

    // corpseHelper() {
    //     this.corpsePushed = false
    //     var that = this;
    //     this.game.entities.forEach(function (entity) {
    //         if (entity.platform && entity.droppable && entity.state != "carried") {
    //             if (entity.buttonPress) {
    //                 that.corpsePushed = true
    //             }
    //         }
    //     });
    // }

};