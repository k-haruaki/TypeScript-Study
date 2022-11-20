class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
var p1 = new Point(5, 10);
console.log(p1);
var p2 = new Point(10, 20);
console.log(p2);
var p3 = p1.add(p2);
console.log(p3);
//# sourceMappingURL=Class.js.map