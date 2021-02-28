class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (var i = 0; i < this.downloadQueue.length; i++) {

            var that = this;

            var path = this.downloadQueue[i];
            console.log(path);
            var ext = path.substring(path.length - 3);

        switch (ext) {
            //if image file
            case 'jpg':
            case 'png':
                //save image to variable the load and print to console
                var img = new Image();
                img.addEventListener("load", function () {
                    console.log("Loaded " + this.src);
                    that.successCount++;
                    if (that.isDone()) callback();
            });
                //if fail, return to console
                img.addEventListener("error", function () {
                    console.log("Error loading " + this.src);
                    that.errorCount++;
                    if (that.isDone()) callback();
            });

            img.src = path;
            this.cache[path] = img;
            break;
              
            //if song file
            case 'wav':
            case 'mp4':
            case 'mp3':
                //save to variable, load it and print to console
                var audi = new Audio();
                audi.addEventListener("loadeddata", function(){
                    console.log("Loaded " + this.src);
                    that.successCount++;
                    if (that.isDone()) callback();
                });
                //if error and print to console
                audi.addEventListener("error", function(){
                    console.log("Error Loaded " + this.src);
                    that.errorCount++;
                    if (that.isDone()) callback();
                });
                //If audio ended, reset the audio to zero
                audi.addEventListener("ended", function(){
                    audi.pause();
                    audi.currentTime = 0;
                });

                audi.src = path;
                audi.load();

                this.cache[path] = audi;
                break;
            }
        }
    };

    getAsset(path) {
        return this.cache[path];
    };

    playAsset(path){
        let audio = this.cache[path];
        audio.currentTime = 0;
        audio.play();
    };

    adjustAudio(volume){
        for (var key in this.cache){
            let asset = this.cache[key];
            if(asset instanceof Audio) {
                asset.volume = volume;
            }
        }
    };

    muteAudio(mute){
        for (var key in this.cache){
            let asset = this.cache[key];
            if(asset instanceof Audio) {
                asset.muted = mute;
            }
        }
    };

    setBGM(path){
        var audi = this.cache[path];
        if(this.music){
            this.music.pause();
        }
        this.music = audi
        audi.loop ="true"
    }

    pauseBGM(){
        this.music.pause();
    };

    playBGM(){
        this.music.play()
    }

    pauseAll(){
        for (var key in this.cache){
            let asset = this.cache[key];
            if(asset instanceof Audio) {
                asset.pause();
                asset.currentTime = 0;
            }
        }
    };

    autoRepeat(path) {
        var audi = this.cache[path];
        audi.addEventListener("ended", function(){
            audi.play();
        });
    };
};

