// 配列（Array）のサンプル
const sampleArray = [
  { key: "ibaraki", value: 2840403 },
  { key: "kanagawa", value: 9221129 },
  { key: "gunma", value: 1915035 },
  { key: "saitama", value: 7331256 },
  { key: "chiba", value: 6267579 },
  { key: "tokyo", value: 13995469 },
  { key: "tochigi", value: 1910502 },
];

// tokyo に対応する値を取得する（find() メソッドを使用）
const arrayResult01 = sampleArray.find((e) => e.key === "tokyo").value;
console.log(arrayResult01); // output: 13995469

// tokyo に対応する値を取得する（for...of を使用）
let arrayResult02;
for (const e of sampleArray) {
  if (e.key === "tokyo") {
    arrayResult02 = e.value;
    break;
  }
}
console.log(arrayResult02); // output: 13995469

// tokyo に対応する値を取得する（for文 を使用）
let arrayResult03;
for (let i = 0; sampleArray.length; i++) {
  if (sampleArray[i].key === "tokyo") {
    arrayResult03 = sampleArray[i].value;
    break;
  }
}
console.log(arrayResult03); // output: 13995469
