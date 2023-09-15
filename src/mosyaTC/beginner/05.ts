// ========== typescriptの本 3.4.3 ==========
type HasName = {
    name: string;
}
type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

// 下記の定義では、HasNameにnumberは含まれていないのでエラーになる
// type T = Family<number, string>

type Animal = {
    name: string;
}

type Human = {
    name: string;
    age: number;
}

type T = Family<Animal, Human>

type Family02<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
}

type S = Family02<Animal, Human>
// エラーになる
// AnimalはHumanの部分型ではないため
// type TT = Family02<Human, Animal>





// ========== 問題 ==========
// Push型を定義してください
// 例えば、Push<[1, 2], '3'>は[1, 2, '3']を返します

type Result = Push<[1, 2], '3'> // [1, 2, '3']

// ========== 回答 ==========
type Push<T extends any[], U> = [...T, U]