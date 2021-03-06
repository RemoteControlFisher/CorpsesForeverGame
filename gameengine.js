// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor() {
        this.entities = [];
        this.showOutlines = false;
        this.ctx = null;
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.sprint = false;
        this.act = false;
        this.jumpDisconnect = false;
        this.kDisconnect = false;
        this.ctrl = false;
        this.playMusic

    };

    init(ctx) {
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    startInput() {
        var that = this;

        console.log("Starting inputs...")
        this.ctx.canvas.addEventListener("keydown", function (e) {
            if (!this.playMusic) {
                this.playMusic = true
                ASSET_MANAGER.playBGM()
            }

            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    break;
                case "ArrowUp":
                case "KeyW":
                case "Space":
                    that.up = true;
                    e.preventDefault()
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = true;
                    break;
                case "KeyJ":
                case "ShiftLeft":
                    that.sprint = true;
                    break;
                case "KeyK":
                    that.keyK = true;
                    break;
                case "ControlLeft":
                case "ControlRight":
                    that.ctrl = true;
                    break;
                default:
                    console.log(e.code)
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                case "Space":
                    that.up = false;
                    that.jumpDisconnect = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
                case "KeyJ":
                case "ShiftLeft":
                    that.sprint = false;
                    break;
                case "KeyK":
                    that.keyK = false;
                    that.kDisconnect = false;
                    break;
                case "ControlLeft":
                case "ControlRight":
                    that.ctrl = false;
                    break;

            }
        }, false);
        console.log("Finalizing inputs...")
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0; i < this.entities.length; i++) {
            if (this.entities[i] && this.entities[i] != this.duck)
                this.entities[i].draw(this.ctx);
        }
        this.duck.draw(this.ctx)
    };

    update() {
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++) {
            var entity = this.entities[i];

            if (entity && !entity.removeFromWorld) {
                entity.update();
            }
        }

        this.camera.update();

        for (var i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i] && this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};