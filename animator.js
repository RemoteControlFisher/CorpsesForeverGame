class animator {
   
    /**
     * KET DIFFERENCE FROM ORIGINAL ANIMATOR, rather then returning when we hit isDone, we draw our idle frame (We can have a fully animated jump which has an idle fall if the
     * player falls for longer then the jump was animated for!)
     * @param {*} spritesheet 
     * @param {*} xStart 
     * @param {*} yStart 
     * @param {*} width 
     * @param {*} height 
     * @param {*} frameCount 
     * @param {*} frameDuration 
     * @param {*} framePadding 
     * @param {*} reverse 
     * @param {*} loop 
     * @param {*} idleFrame 
     */
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop, idleFrame = null) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop, idleFrame} )
        this.elapsedTime = 0
        this.totalTime = this.frameCount*this.frameDuration
    }

    drawFrame (tick, ctx, x, y, scale){
        this.elapsedTime += tick

        if(this.isDone()){
            if (this.loop){
                this.elapsedTime -= this.totalTime
            }
            else {
                //Rather then returning on "Done" animations, we can have idle frames which are one frame animations which depict the animation continuing.
                //The key use for this is I have an animated jump, and I want to display the fall frame after I am done animating the rising frames.
                if(idleFrame){
                    idleFrame.drawFrame(thick, ctx, x, y, scale)
                }
                return
            }
        } 

        let frame = this.currentFrame();
        if (this.reverse) frame = this.frameCount - frame - 1

        ctx.drawImage(
            this.spritesheet,
            this.xStart + frame * (this.width + this.framePadding),
            this.yStart,
            this.width, 
            this.height,
            x, 
            y,
            this.width*scale,
            this.height*scale
        )
    }

    currentFrame(){
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone(){
        return this.elapsedTime >= this.totalTime;
    }
}