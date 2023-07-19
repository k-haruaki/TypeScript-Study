// Map オブジェクトのサンプル
const sampleMap = new Map<string, number>();
sampleMap.set("ibaraki", 2840403);
sampleMap.set("kanagawa", 9221129);
sampleMap.set("gunma", 1915035);
sampleMap.set("saitama", 7331256);
sampleMap.set("chiba", 6267579);
sampleMap.set("tokyo", 13995469);
sampleMap.set("tochigi", 1910502);

// tokyo に対応する値を取得する（get() メソッドを使用）
const mapResult = sampleMap.get("tokyo");
console.log(mapResult); // output: 13995469
