function outerFunction(arg) {
    var variableInOtherFunction = arg;
    function bar() {
        console.log(variableInOtherFunction);
    }
    bar();
}
outerFunction('Hello Closure');
//# sourceMappingURL=Closure.js.map