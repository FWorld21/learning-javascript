"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.width * this.height;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Height: ${this.height}\nWidth: ${this.width}\nText: ${this.text}\nBackground Color: ${this.bgColor}`);
    }
}

const rectObj = new Rectangle(10, 10);
console.log(rectObj.calcArea());

const coloredRectObj = new ColoredRectangleWithText(200, 30, 'Hello world', 'red');
coloredRectObj.showMyProps();