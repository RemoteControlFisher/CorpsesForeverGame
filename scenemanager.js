class scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.isTitle = true; //should title be on?
        this.score = 0 //not yet implemented
        this.currentWorld = "null";
        this.duck = new duck(this.game, "stand", 0, 0);
        console.log(duck);
        //this.loadlevel(tutorialLevel, 0, 0, true);
        this.loadlevel(tutorialLevel, 0, 0, this.isTitle);
        //console.log(this.isTitle);
    };

    //should delete entity once level is finished 
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadlevel(level, startx = 0, starty = 0, isTitle) {
        //console.log(isTitle);
        this.isTitle = isTitle
        this.currentWorld = "tutorial";
        this.game.entities = [];
        this.x = 0;

        /** 
        if (level.goals)
        for (let i = 0; i < level.goals.length; i++) {
            let x = level.goals[i].x
            let y = level.goals[i].y
            let nextLevel = allLevels[level.goals[i].nLevel]
            let myGoal = new goal(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, nextLevel, this)
            console.log(myGoal)
            this.game.addEntity(myGoal)
        }
        */

        if (level.slowback) {
            //x, y, sprite, speed, scale
            for (let i = 0; i < level.slowback.length; i++){
                let x = level.slowback[i].x
                let y = level.slowback[i].y
                let sprite = level.slowback[i].sprite
                let sheet = level.slowback[i].speed
                let scale = level.slowback[i].scale
                let width = level.slowback[i].width
                let height = level.slowback[i].height

                this.game.addEntity(new slow_background(x,y, sprite , sheet, scale, width, height))
            }
        }
        if (level.backs) {
            console.log(level.backs)
            for (let i = 0; i < level.backs.length; i++) {
                let type = level.backs[i].type
                if (type == "bwall" || type == "darkBwall") // IF the type is an optimized background type.
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
        if (level.spikes)
            for (let i = 0; i < level.spikes.length; i++) {
                let x = level.spikes[i].x
                let y = level.spikes[i].y
                let length = level.spikes[i].length
                let myTrap = new long_spike(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, length)
                console.log(myTrap)
                this.game.addEntity(myTrap)
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
        if (level.buttons && level.doors || level.buttons && level.dtexts) {

            for (let i = 0; i < level.buttons.length; i++) {
                let myDoors = [];
                let myDTexts = [];
                let x = level.buttons[i].x
                let y = level.buttons[i].y
                if (level.doors) {
                    for (let j = 0; j < level.doors.length; j++) {
                        if (level.buttons[i].key == level.doors[j].key) {
                            let x = level.doors[j].x
                            let y = level.doors[j].y
                            let myDoor = new doors(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH)
                            myDoors.push(myDoor)
                            this.game.addEntity(myDoor)
                        }
                    }
                }
                if (level.dtexts) {
                    for (let j = 0; j < level.dtexts.length; j++) {
                        if (level.buttons[i].key == level.dtexts[j].key) {
                            let x = level.dtexts[j].x
                            let y = level.dtexts[j].y
                            let text = level.dtexts[j].toWrite
                            let anim = level.dtexts[j].animated
                            let delay = level.dtexts[j].delay
                            let myDText = new dtext(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, text, anim, delay, false)
                            myDTexts.push(myDText)
                            this.game.addEntity(myDText)
                        }
                    }
                }
                this.game.addEntity(new buttons(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, myDoors, myDTexts))
            }
        }
        if (level.dtexts) {
            for (let i = 0; i < level.dtexts.length; i++) {
                if (!level.dtexts[i].key || level.dtexts[i].key == -1) {
                    let x = level.dtexts[i].x
                    let y = level.dtexts[i].y
                    let text = level.dtexts[i].toWrite
                    let anim = level.dtexts[i].animated
                    let delay = level.dtexts[i].delay
                    let myText = new dtext(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, text, anim, delay, true)
                    this.game.addEntity(myText)
                }
            }
        }

        if (level.chompers)
            for (let i = 0; i < level.chompers.length; i++) {
                let x = level.chompers[i].x
                let y = level.chompers[i].y
                let facing = 'l'
                if (level.chompers[i].facing) facing = level.chompers[i].facing
                this.game.addEntity(new Chompers(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, facing))
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
                if (i==0) {
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
        if (level.goals)
            for (let i = 0; i < level.goals.length; i++) {
                let x = level.goals[i].x
                let y = level.goals[i].y
                let nextLevel = null
                let loc = { x: 0, y: 0 }
                if (level.goals[i].nLevel)
                    nextLevel = allLevels[level.goals[i].nLevel]
                if (level.goals[i].loc)
                    loc = level.goals[i].loc
                let myGoal = new goal(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH, nextLevel, this, loc)
                console.log(myGoal)
                this.game.addEntity(myGoal)
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
        //if there is a title in level and title should be on
        if (level.title && isTitle) {
            //console.log(level.title);
            //console.log(level.title.x);
            let x = level.title.x;
            let y = level.title.y;
            //console.log(startx);
            //console.log(x);
            //console.log(PARAMS.BLOCKWIDTH);
            let mytitle = new title(this.game, startx + x * PARAMS.BLOCKWIDTH, starty - y * PARAMS.BLOCKWIDTH)
            console.log(mytitle)
            this.game.addEntity(mytitle)
        }
        if (level.scripts) {
            level.scripts()
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

        //console.log(volume)

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustAudio(volume);
    }

    update() {

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