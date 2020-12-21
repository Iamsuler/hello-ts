// 函数与命名空间合并
function Lib() { }
(function (Lib) {
    Lib.version = '1.2';
})(Lib || (Lib = {}));
console.log(Lib);
var LibClass = /** @class */ (function () {
    function LibClass() {
    }
    return LibClass;
}());
(function (LibClass) {
    LibClass.version = '1.2';
})(LibClass || (LibClass = {}));
console.log(LibClass);
var LibEnum;
(function (LibEnum) {
    LibEnum[LibEnum["Blue"] = 0] = "Blue";
    LibEnum[LibEnum["Yellow"] = 1] = "Yellow";
})(LibEnum || (LibEnum = {}));
(function (LibEnum) {
    function mix() { }
    LibEnum.mix = mix;
})(LibEnum || (LibEnum = {}));
console.log(LibEnum);
