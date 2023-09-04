// ========== ジェネリックの理解 ==========
type Foo<T> = {
  bar: T;
};

type FooString = Foo<string>; // { bar: string }
type FooNumber = Foo<number>; // { bar: number }

type Foo02<T extends string> = {
  bar: T;
};

type FooString02 = Foo02<string>; // { bar: string }

// この定義はエラーになる
// T extends stringとすることで、Tは、string型か、string型を継承した型に制約される
// type FooNumber02 = Foo02<number>;

// ========== keyofの理解 ==========
interface Todo {
  title: string;
  description: string;
}

type TodoKeys = keyof Todo; // "title" | "description"

// ========== Mapped Typesの理解 ==========
type TodoKeys02 = "title" | "description";
type Todo02 = {
  [K in TodoKeys02]: string;
};

// 以下のように展開される
// type Todo02 = {
//     title: string
//     description: string
// }

// ========== インデックスアクセス型を理解する ==========
interface Todo {
  title: string;
  description: string;
}

type title = Todo["title"]; // string

// ========== 回答 ==========
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

