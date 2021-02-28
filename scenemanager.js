class scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.score = 0 //not yet implemented

        this.duck = new duck(this.game, "stand", 0, 0);
        console.log(duck)
        this.loadlevel(tutorialLevel, 0, 0);
    };

    loadlevel(level, startx, starty) {
        this.game.entities = [];
        this.x = 0;



        if (level.backs) {
            console.log(level.backs)
            for (let i = 0; i < level.backs.length; i++) {
                let type = level.backs[i].type
                if (type = "bwall") // IF the type is an optimized background type.
                    this.game.addEntity(new long_backgrounds(this.game, startx + level.backs[i].startX * PARAMS.BLOCKWIDTH, starty - level.backs[i].startY * PARAMS.BLOCKWIDTH, level.backs[i].lengthX,
                        level.backs[i].lengthY, type))
                else { // If the type is not an optimized background type.
                    for (let j = level.backs[i].startX; j < level.backs[i].lengthX + level.backs[i].startX; j++) {
                        for (let k = level.backs[i].startY; k < level.backs[i].lengthY + level.backs[i].startY; k++) {
                            this.game.addEntity(new background(this.game, startx + j * PARAMS.BLOCKWIDTH, starty - k * PARAMS.BLOCKWIDTH, type))
                        }
                    }
                }
            }
        }
        if (level.walls)
            for (let i = 0; i < level.walls.length; i++) {
                let type = level.walls[i].type
                this.game.addEntity(new long_floorsandwalls(this.game, startx + level.walls[i].startX * PARAMS.BLOCKWIDTH, starty - level.walls[i].startY * PARAMS.BLOCKWIDTH,
                    level.walls[i].lengthX, level.walls[i].lengthY, type))
                /*//Old floors and walls.

                for (let j = level.walls[i].startX; j < level.walls[i].lengthX + level.walls[i].startX; j++)
                    for (let k = level.walls[i].startY; k < level.walls[i].lengthY + level.walls[i].startY; k++)
                        this.game.addEntity(new floorsandwalls(this.game, startx + j * PARAMS.BLOCKWIDTH, starty - k * PARAMS.BLOCKWIDTH, type))*/
            }
        if (level.textboxes)
            for (let i = 0; i < level.textboxes.length; i++) {
                let x = level.textboxes[i].x
                let y = level.textboxes[i].y
                //let text = level.textboxes[i].text
                this.game.addEntity(new textboxes(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, i))
            }

        if (level.traps)
            for (let i = 0; i < level.traps.length; i++) {
                let x = level.traps[i].x
                let y = level.traps[i].y
                let type = level.traps[i].type
                let myTrap = new traps(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, type)
                console.log(myTrap)
                this.game.addEntity(myTrap)
            }
        if (level.buttons && level.doors) {

            for (let i = 0; i < level.buttons.length; i++) {
                let myDoors = [];
                let x = level.buttons[i].x
                let y = level.buttons[i].y
                for (let j = 0; j < level.doors.length; j++) {
                    if (level.buttons[i].key == level.doors[j].key) {
                        let x = level.doors[j].x
                        let y = level.doors[j].y
                        let myDoor = new doors(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH)
                        myDoors.push(myDoor)
                        this.game.addEntity(myDoor)
                    }
                }
                this.game.addEntity(new buttons(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, myDoors))
            }
        }
        if (level.dtexts) {
            for (let i = 0; i < level.dtexts.length; i++) {
                let x = level.dtexts[i].x
                let y = level.dtexts[i].y
                let text = level.dtexts[i].toWrite
                let anim = level.dtexts[i].animated
                let delay = level.dtexts[i].delay
                let myText = new dtext(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, text, anim, delay)
                this.game.addEntity(myText)
            }
        }

        if (level.chompers)
            for (let i = 0; i < level.chompers.length; i++) {
                let x = level.chompers[i].x
                let y = level.chompers[i].y
                this.game.addEntity(new Chompers(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH))
            }
        if (level.lurkers)
            for (let i = 0; i < level.lurkers.length; i++) {
                let x = level.lurkers[i].x
                let y = level.lurkers[i].y
                let myLurkers = new Lurkers(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH)
                console.log(myLurkers)
                this.game.addEntity(myLurkers)
            }
        if (level.hoppers)
            for (let i = 0; i < level.hoppers.length; i++) {
                let x = level.hoppers[i].x
                let y = level.hoppers[i].y
                let facing = "l"
                if (level.hoppers[i].facing) facing = level.hoppers[i].facing
                let aHopper = new Hoppers(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, facing)
                console.log(aHopper)
                this.game.addEntity(aHopper)
            }
        if (level.spawns)
            for (let i = 0; i < level.spawns.length; i++) {
                let x = level.spawns[i].x
                let y = level.spawns[i].y
                let mySpawn = new spawnpoints(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH)
                if (!this.game.duck.spawn) {
                    let scenter = mySpawn.BB.center()
                    this.game.duck.setSpawn(scenter.x, scenter.y, mySpawn)
                }
                this.game.addEntity(mySpawn)

            }
        if (level.boxes)
            for (let i = 0; i < level.boxes.length; i++) {
                let x = level.boxes[i].x
                let y = level.boxes[i].y
                this.game.addEntity(new boxes(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH))
            }
        if (level.corpses) {
            console.log("Hi.")
            for (let i = 0; i < level.corpses.length; i++) {
                let x = level.corpses[i].x
                let y = level.corpses[i].y
                let type = level.corpses[i].type
                let facing = "r"
                if (level.corpses[i].facing) {
                    facing = level.corpses[i].facing
                }
                let myCorpse = new corpses(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, type, facing)
                this.game.addEntity(myCorpse)
                console.log(myCorpse)
            }
        }

        //If there is music in the level, play it!
        if (level.music) {
            //ASSET_MANAGER.pauseBGM();
            ASSET_MANAGER.setBGM(level.music);
        }

        this.duck.x = startx;
        this.duck.y = starty - 3 * PARAMS.BLOCKWIDTH;
        this.game.addEntity(this.duck);
        let myText = new text(this.game, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH)
        this.game.addEntity(myText);
    };

    //check if mute box is checked
    //check if volume is slided
    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;

        console.log(volume)

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustAudio(volume);
    }

    update() {
        //PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
        let midheight = PARAMS.CANVAS_HEIGHT / 2 - PARAMS.BLOCKWIDTH / 2;

        let center = this.duck.BB.center()
        this.x = center.x - midpoint;
        this.y = center.y - midheight;

        this.updateAudio();
    };

    draw(ctx) {

    };
};