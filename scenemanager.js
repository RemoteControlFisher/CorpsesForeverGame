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

    loadlevel(tutorialLevel, x, y) {
        this.game.entities = [];
        this.x = 0;

        for (var i = 0; i < tutorialLevel.length; i++){

        }

        this.duck.x = x + 100;
        this.duck.y = y + 300;
        this.game.addEntity(this.duck);
    };

    update() {
        //PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        let midheight = PARAMS.CANVAS_HEIGHT/2  - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.duck.x - midpoint) this.x = this.duck.x - midpoint;
        //this.x = this.duck.x - midpoint;

    };

    draw(ctx) {

    };
};