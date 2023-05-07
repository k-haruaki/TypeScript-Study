type Props = {
  children: React.ReactNode;
};

const Component = (props: Props) => {
  return <div>{props.children}</div>;
};

const Component2 = ({ children }: Props) => {
  return <div>{children}</div>;
};
