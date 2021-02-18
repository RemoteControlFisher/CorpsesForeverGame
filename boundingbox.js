class boundingBox {
    constructor(x, y, width, height, active = true){
        Object.assign(this, {x,y,width,height, active})
        this.left = x
        this.top = y
        this.right = x+width
        this.bottom = y+height
    }

    center(){
        return { 
            x: this.x+this.width/2,
            y: this.y+this.height/2
        }
    }

    isCollide(oth) {
        if (this.active && oth.active && this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) return true;
        return false;
    }
}