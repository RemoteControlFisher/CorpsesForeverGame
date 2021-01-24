class scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0 //not yet implemented

        this.duck = new duck(this.game, "stand", 280, 280);

        this.loadTutorial();
    };

    clearEntities() {

    };

    loadTutorial() {
        this.game.entities = [];
        this.x = 0;

        
        this.game.addEntity(duck);
    }

    draw(ctx) {

    }

    update() {
        
    }
}