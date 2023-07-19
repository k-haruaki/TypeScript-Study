function outerFunction(arg: string) {
  var variableInOtherFunction = arg;

  function bar() {
    console.log(variableInOtherFunction);
  }

  bar();
}

outerFunction("Hello Closure");
