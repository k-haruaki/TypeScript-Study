import { useState } from "react";

type State = {
  name: string;
  age: number;
  profile: {
    displayName: string;
    message: string;
  };
};

const Component = () => {
  const [objectState, setObjectState] = useState<State>({
    name: "",
    age: 20,
    profile: {
      displayName: "",
      message: "",
    },
  });

  const onClick = () => {
    setObjectState((value) => {
      (value.name = "Yamada"),
        (value.age = 20),
        (value.profile.message = "abc"),
        (value.profile.displayName = "Yamada");
      return { ...value };
    });
  };

  return (
    <div>
      name={objectState.name}
      age={objectState.age}
      profile={objectState.profile.displayName}
      message={objectState.profile.message}
      <button onClick={onClick}>set name</button>
    </div>
  );
};

export default Component;
