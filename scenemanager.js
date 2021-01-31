class scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.score = 0 //not yet implemented

        this.duck = new duck(this.game, "stand", 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        this.loadlevel(tutorialLevel, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
    };

    loadlevel(level, x, y) {
        this.game.entities = [];
        this.x = 0;
        
        if (level.backs) {
            for (let i = 0; i < level.backs.lenght; i++) {
                let x = level.backs[i].x
                let y = level.backs[i].y
                let type = level.backs[i].type
                this.game.add(new background(this.game, x, y, type))
            }
            for (let i = 0; i < level.walls.length; i++) {
                let x = level.walls[i].x
                let y = level.walls[i].y
                let type = level.walls[i].type
                this.game.add(new floorsandwalls(this.game, x, y, type))
            }
            for (let i = 0; i < level.boxes.length; i++) {
                let x = level.walls[i].x
                let y = level.walls[i].y
                this.game.add(new boxes(this.game, x, y))
            }
            for (let i = 0; i < level.corpses.length; i++) {
                let x = level.corpses[i].x
                let y = level.corpses[i].y
                let type = level.corpses[i].type
                this.game.add(new corpses(this.game, x, y, type))
            }
            for (let i = 0; i < level.traps.length; i++) {
                let x = level.traps[i].x
                let y = level.traps[i].y
                let type = level.traps[i].type
                this.game.add(new traps(this.game, x, y, type))
            }
            for (let i = 0; i < level.buttons.length; i++) {
                let x = level.buttons[i].x
                let y = level.buttons[i].y
                this.game.add(new buttons(this.game, x, y))
            }
            for (let i = 0; i < level.doors.length; i++) {
                let x = level.doors[i].x
                let y = level.doors[i].y
                this.game.add(new doors(this.game, x, y))
            }
        }


        this.duck.x = x + 100;
        this.duck.y = y + 300;
        this.game.addEntity(this.duck);
    };

    update() {
        //PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2;
        let midheight = PARAMS.CANVAS_HEIGHT / 2 - PARAMS.BLOCKWIDTH / 2;

        this.x = this.duck.x - midpoint;
        this.y = this.duck.y - midheight;

    };

    draw(ctx) {

    };
};