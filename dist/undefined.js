// よくない例
// strが「undefined」や「null」などの場合は変換されない
const toInt = (str) => {
    return str ? parseInt(str) : undefined;
};
console.log(toInt(null));
console.log(toInt(undefined));
console.log(toInt('a'));
console.log(toInt('1'));
// 良い例
const toInt2 = (str) => {
    const int = parseInt(str);
    if (isNaN(int)) {
        return { valid: false };
    }
    else {
        return { valid: true, int };
    }
};
console.log(toInt2(null));
console.log(toInt2(undefined));
console.log(toInt2('a'));
console.log(toInt2('1'));
//# sourceMappingURL=Undefined.js.map