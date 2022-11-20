class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(5, 10);
console.log(p1);

var p2 = new Point(10, 20);
console.log(p2)

var p3 = p1.add(p2);
console.log(p3)