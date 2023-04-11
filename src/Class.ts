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
console.log(p3);

// 継承について
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

// アクセス修飾子
class FooBase {
  public x: number;
  protected y: number;
  private z: number;
}

// インスタンスにおける効果
var foo = new FooBase();
foo.x;
// protectedのためエラーになる
// foo.y;

// privateのためエラーになる
// foo.z;

class FooChild extends FooBase {
  constructor() {
    super();
    this.x;
    this.y;
    // privateのためエラーになる
    // this.z;
  }
}

abstract class FooCommand {
  //   abstract execute(): string;
}

class BarErrorCommand extends FooCommand {} // 'BarErrorCommand'は抽象メンバー'execute'を実装する必要があります

class BarCommand extends FooCommand {
  execute() {
    return `コマンドBarが実行されました`;
  }
}

const barCommand = new BarCommand();

barCommand.execute(); // コマンドBarが実行されました

// コンストラクタの定義
class Foo {
  x: number;
  constructor(x: number) {
    this.x = x;
  }
}

// プロパティ初期化子
// 例文のmembersで型を指定しないとエラーになるため、型の指定が必要
class Bar {
  members: string[] = []; // コンストラクタなしで直接メンバ変数を初期化できます
  add(x: string) {
    this.members.push(x);
  }
}

type Name = {
  firstName: string;
  lastName: string;
};

interface IName {
  firstName: string;
  lastName: string;
}

interface Profile extends IName {
  age: number;
}

interface A extends Name {
  age: number;
}

const myName: Profile = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29,
};

const myName2: A = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29,
};

interface IName {
  age: number;
}

const myName3: IName = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29, // 定義は違うが、INameはinterfaceで再定義しているので、ageが必要になる
};
