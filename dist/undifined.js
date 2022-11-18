// よくない例
// strが「undefined」や「null」などの場合は変換されない
const toInt = (str) => {
    return str ? parseInt(str) : undefined;
};
console.log(toInt(null));
console.log(toInt(undefined));
console.log(toInt('a'));
console.log(toInt('1'));
//# sourceMappingURL=undifined.js.map