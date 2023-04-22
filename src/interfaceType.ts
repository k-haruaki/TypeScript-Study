type Name = {
  firstName: string;
  lastName: string;
};

// typeは同じ名前のものを定義しようとするとエラーになる
// type Name = {}

interface IName {
  firstName: string;
  lastName: string;
}

interface IName {
  age: number;
}

interface Profile extends IName {
  age: number;
}

interface A extends Name {
  age: number;
}

const myName: Profile = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29,
};

const myName2: A = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29,
};

const myName3: IName = {
  firstName: "kawahira",
  lastName: "haruaki",
  age: 29, // 定義は違うが、INameはinterfaceで再定義しているので、ageが必要になる
};

const Sample = (value: string | number) => {
  // valueは、string | numberであるため、sampleValueには代入できない
  // const sampleValue: string = value;

  // valueをasでstringに指定できるが、型の安全性が崩れてしまうため、よくない
  const sampleValue: string = value as string;
  console.log(sampleValue);
};
