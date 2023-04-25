// API1. 非同期でAPIにリクエストを送って値を取得する処理
function request1(callback: any) {
  setTimeout(() => {
    callback(1);
  }, 1000);
}

// API2. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request2(result1: any, callback: any) {
  setTimeout(() => {
    callback(result1 + 1);
  }, 1000);
}

// API3. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request3(result2: any, callback: any) {
  setTimeout(() => {
    callback(result2 + 2);
  }, 1000);
}

// 上記の関数を組み合わせて3つのAPIリクエストを順次実装する
request1((result1: any) => {
  request2(result1, (result2: any) => {
    request3(result2, (result3: any) => {
      console.log(result3);
      // @log: 4
    });
  });
});
