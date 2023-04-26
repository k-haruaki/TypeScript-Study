type User = {
  name: string;
  age: number;
};

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    resolve(user);
  });
}

getUser().then((user: User) => {
  console.log(user);
  // @log: { "name": "太郎", "age": 10 }
});

// 例：thenのたびに新しく定数を定義する
const promise1: Promise<number> = Promise.resolve(1);
const promise2: Promise<string> = promise1.then((value) => `${value}`);

// 例：thenでメソッドチェーン
const promise: Promise<boolean> = Promise.resolve("1")
  .then((value) => Number(value))
  .then((value) => value > 0);

// コールバック内で例外を投げるとそのPromiseは拒否される
Promise.resolve(1)
  .then(() => {
    throw new Error();
  })
  .then(() => {
    console.log("fulilled");
  })
  .catch(() => {
    console.log("rejected");
  });
// @log: rejected

// コールバック内で拒否されたPromiseを返しても、そのPromiseは拒否される
Promise.resolve(1)
  .then(() => {
    return Promise.reject(new Error());
  })
  .then(() => {
    console.log("fulilled");
  })
  .then(() => {
    console.log("rejected");
  });
// @log: rejected
