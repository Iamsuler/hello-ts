/// <reference path="./a.ts" />
var Shape;
(function (Shape) {
    var PI = Math.PI;
    function square(w) {
        return Math.pow(w, 2);
    }
    Shape.square = square;
    // 到处的函数不能重复定义
    // export function circle (r: number) {
    //   return Math.PI * r ** 2
    // }
    function circle(r) {
        return Math.PI * Math.pow(r, 2);
    }
})(Shape || (Shape = {}));
console.log(Shape.circle(2));
console.log(Shape.square(2));
