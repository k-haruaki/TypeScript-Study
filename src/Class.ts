// クラスについて
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
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3)


// 軽症について
class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

var p4 = new Point3D(10, 20, 30);
var p5 = new Point3D(40, 50, 60);
var p6 = p4.add(p5);
console.log(p6);


// 静的メンバについて
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

var s1 = new Something();
var s2 = new Something();
var s3 = new Something();
console.log(Something.instances);