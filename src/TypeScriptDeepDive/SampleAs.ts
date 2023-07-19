const Sample = (value: string | number) => {
  // valueは、string | numberであるため、sampleValueには代入できない
  // const sampleValue: string = value;

  // valueをasでstringに指定できるが、型の安全性が崩れてしまうため、よくない
  const sampleValue: string = value as string;
  console.log(sampleValue);
};
