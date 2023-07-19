// 非同期でAPIリクエストを投げて値を取得する処理
function request4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request5(result1: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result1 + 1);
    }, 1000);
  });
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request6(result2: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result2 + 2);
    }, 1000);
  });
}

request4()
  .then((result1) => {
    return request5(result1);
  })
  .then((result2) => {
    return request6(result2);
  })
  .then((result3) => {
    console.log(result3);
    // @log: 4
  });
