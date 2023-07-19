import { useState } from "react";

// stateの初期化と更新
// objectはスプレッド構文を使って更新する必要がある
const Component = () => {
  const [numberState, setNumberState] = useState(0);
  const [stringState, setStringState] = useState("");
  const [objectState, setObjectState] = useState({
    name: "",
    age: 10,
  });

  return (
    <>
      <div>
        {numberState}
        <button onClick={() => setNumberState(numberState + 1)}>+</button>
      </div>

      <div>
        {stringState}
        <button onClick={() => setStringState("押された！")}>press</button>
      </div>

      <div>
        name={objectState.name}
        age={objectState.age}
        <button
          onClick={() => setObjectState({ ...objectState, name: "Yamada" })}
        >
          set name
        </button>
        <button onClick={() => setObjectState({ ...objectState, age: 20 })}>
          set age
        </button>
      </div>
    </>
  );
};
