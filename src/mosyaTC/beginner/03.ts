// 配列の長さを返すLength<T>を実装してください。

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

// ========== ジェネリックすの理解 ==========
type FooString03 = Foo03<string> // { bar: string }
type FooNumber03 = Foo03<number> // { bar: number }

type Foo03<T> = {
    bar:T
}


// ========== 回答 ==========
type Length<T extends any[]> = T['length'];