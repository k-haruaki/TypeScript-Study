const ConditionComponent = ({ flg }: { flg: boolean }) => {
  return <p>{flg ? "trueの時のJSX" : "falseの時のJSX"}</p>;
};

// finish = true で finishクラスを追加
const TaskItem = (props: { task: string; finish: boolean }) => {
  return <li className={props.finish ? "finish" : ""}>{props.task}</li>;
};
