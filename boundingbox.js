class boundingBox {
    constructor(x, y, width, height){
        Object.assign(this, {x,y,width,height})
        this.left = x
        this.top = y
        this.right = x+width
        this.bottom = y+height
    }


    isCollide(oth) {
        if (this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) return true;
        return false;
    }
}