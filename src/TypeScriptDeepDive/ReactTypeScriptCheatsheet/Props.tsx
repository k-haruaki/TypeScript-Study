type Props = {
  message: string;
};

const Component = (props: Props) => {
  return <div>{props.message}</div>;
};

const Component2 = ({ message }: Props) => {
  return <div>{message}</div>;
};

type Props2 = {
  message: string; // 文字列
  num: number; // 数値
  optionalMessage?: string; // 省略可能な文字列
  optionalNum?: number; // 省略可能な数値
  eventHandler: () => {}; // イベントなどのcallback
};

const Component3 = (props: Props2) => {
  return (
    <div>
      <h2>
        #{props.num} {props.message}
      </h2>
      <p>{props.optionalMessage ?? "省略した時の初期値"}</p>
      <p>{props.optionalNum ?? 10}</p>
      <button onClick={props.eventHandler}>ボタン</button>
    </div>
  );
};
