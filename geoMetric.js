class geoMetric {
    constructor(width, height, length) {
        this.width = width;
        this.height = height;
        this.length = length;
    }

    getPerimeter() {
        return (this.width+this.height+this.length)*4;
    }

    getSquare() {
        return (this.width*this.height+this.width*this.length+this.height*this.length)*2;
    }

    getVolume() {
        return (this.width*this.height*this.length);
    }
}