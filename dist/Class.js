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
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
var p4 = new Point3D(10, 20, 30);
var p5 = new Point3D(40, 50, 60);
var p6 = p4.add(p5);
console.log(p6);
class Something {
    constructor() {
        Something.instances++;
    }
}
Something.instances = 0;
var s1 = new Something();
var s2 = new Something();
var s3 = new Something();
console.log(Something.instances);
//# sourceMappingURL=Class.js.map