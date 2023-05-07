type Props = {
  message: string;
};

const Component = (props: Props) => {
  return <div>{props.message}</div>;
};

const Component2 = ({ message }: Props) => {
  return <div>{message}</div>;
};
