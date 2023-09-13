// Tuple型からObject型を生成するTupleToObjectを実装してください。

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


// ========== readonly修飾子による制約 ==========
type Foo04<T extends readonly any[]> = {
    bar: T
}

const car = ['tesla', 'model 3', 'model X', 'model Y'] as const
// as constを使うことで、配列の中の値が再割り当てできないことが前提となる

type FooString04 = Foo04<typeof car>
// 型は以下のようになる
// type FooString04 = {
//     bar: readonly ["tesla", "model 3", "model X", "model Y"];
// }


// ========== Mapped Typesを理解する ==========
type TodoKey = "title" | "description"

type Todo04 = {
    [K in TodoKeys]: string
}

// 以下のように展開される
// type Todo04 = {
//     title: string
//     description: string
// }

// ========== 回答 ==========
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]] :K
}
