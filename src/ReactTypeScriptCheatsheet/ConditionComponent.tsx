const ConditionComponent = ({ flg }: { flg: boolean }) => {
  return <p>{flg ? "trueの時のJSX" : "falseの時のJSX"}</p>;
};
