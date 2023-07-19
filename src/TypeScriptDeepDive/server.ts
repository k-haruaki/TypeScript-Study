// 計算プログラム
const a: number = 5;
const b: number = 10;

// 関数 足し算を定義
const sum = (a: number, b: number): number => {
  return a + b;
};

// 足し算の結果表示
const result = sum(a, b);
console.log(`${a} + ${b} = ${result}です`);

// 関数 引き算を定義
const minus = (a: number, b: number): number => {
  return a - b;
};

// 引き算の結果表示
const minusResult = minus(a, b);
console.log(`${a} - ${b} = ${minusResult}です`);
