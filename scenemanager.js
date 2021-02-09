class scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.score = 0 //not yet implemented

        this.duck = new duck(this.game, "stand", 0, 0);
        console.log(duck)
        this.loadlevel(tutorialLevel, 100, 300);
    };

    loadlevel(level, startx, starty) {
        this.game.entities = [];
        this.x = 0;

        if (level.backs) {
            console.log(level.backs)
            for (let i = 0; i < level.backs.length; i++) {
                let type = level.backs[i].type
                for (let j = level.backs[i].startX; j < level.backs[i].lengthX + level.backs[i].startX; j++){
                    for (let k = level.backs[i].startY; k < level.backs[i].lengthY + level.backs[i].startY; k++){
                        this.game.addEntity(new background(this.game, startx + j * PARAMS.BLOCKWIDTH, starty - k * PARAMS.BLOCKWIDTH, type))
                    }
                }
            }
        }
        if (level.walls)
            for (let i = 0; i < level.walls.length; i++) {
                let type = level.walls[i].type
                this.game.addEntity(new long_floorsandwalls(this.game, startx  + level.walls[i].startX * PARAMS.BLOCKWIDTH, starty - level.walls[i].startY * PARAMS.BLOCKWIDTH, 
                    level.walls[i].lengthX, level.walls[i].lengthY, type))
                /*//Old floors and walls.

                for (let j = level.walls[i].startX; j < level.walls[i].lengthX + level.walls[i].startX; j++)
                    for (let k = level.walls[i].startY; k < level.walls[i].lengthY + level.walls[i].startY; k++)
                        this.game.addEntity(new floorsandwalls(this.game, startx + j * PARAMS.BLOCKWIDTH, starty - k * PARAMS.BLOCKWIDTH, type))*/
            }
        if (level.textboxes)
            for (let i = 0; i < level.textboxes.length; i++){
                let x = level.textboxes[i].x
                let y = level.textboxes[i].y
                //let text = level.textboxes[i].text
                this.game.addEntity(new textboxes(this.game,startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH, i))
            }
        if (level.boxes)
            for (let i = 0; i < level.boxes.length; i++) {
                let x = level.boxes[i].x
                let y = level.boxes[i].y
                this.game.addEntity(new boxes(this.game,startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH))
            }
        if (level.corpses){
            console.log("Hi.")
            for (let i = 0; i < level.corpses.length; i++) {
                let x = level.corpses[i].x
                let y = level.corpses[i].y
                let type = level.corpses[i].type
                let facing = "r"
                if(level.corpses[i].facing){
                    facing = level.corpses[i].facing
                }
                let myCorpse = new corpses(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH, type, facing)
                this.game.addEntity(myCorpse)
                console.log(myCorpse)
            }
        }
        if (level.traps)
            for (let i = 0; i < level.traps.length; i++) {
                let x = level.traps[i].x
                let y = level.traps[i].y
                let type = level.traps[i].type
                let myTrap = new traps(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH, type)
                console.log(myTrap)
                this.game.addEntity(myTrap)
            }
        if (level.buttons)
            for (let i = 0; i < level.buttons.length; i++) {
                let x = level.buttons[i].x
                let y = level.buttons[i].y
                this.game.addEntity(new buttons(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH))
            }
        if (level.doors)
            for (let i = 0; i < level.doors.length; i++) {
                let x = level.doors[i].x
                let y = level.doors[i].y
                this.game.addEntity(new doors(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH))
            }
        if (level.chompers)
            for (let i = 0; i < level.chompers.length; i++) {
                let x = level.chompers[i].x
                let y = level.chompers[i].y
                this.game.addEntity(new Chompers(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH))
            }
        if (level.hoppers)
            for (let i = 0; i < level.hoppers.length; i++) {
                let x = level.hoppers[i].x
                let y = level.hoppers[i].y
                let myHopper = new Hoppers(this.game, startx + x*PARAMS.BLOCKWIDTH, starty - y*PARAMS.BLOCKWIDTH)
                console.log(myHopper)
                this.game.addEntity(myHopper)
            }




        this.duck.x = startx;
        this.duck.y = starty - 3 * PARAMS.BLOCKWIDTH;
        this.game.addEntity(this.duck);
    };

    update() {
        //PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        let midheight = PARAMS.CANVAS_HEIGHT/2  - PARAMS.BLOCKWIDTH / 2;

        let center = this.duck.BB.center()
        this.x = center.x - midpoint;
        this.y = center.y - midheight;

    };

    draw(ctx) {

    };
};