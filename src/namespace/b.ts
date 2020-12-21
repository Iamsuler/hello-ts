/// <reference path="./a.ts" />

namespace Shape {
  const PI = Math.PI

  export function square (w: number) {
    return w ** 2
  }

  // 到处的函数不能重复定义
  // export function circle (r: number) {
  //   return Math.PI * r ** 2
  // }
  function circle (r: number) {
    return Math.PI * r ** 2
  }
}

console.log(Shape.circle(2))
console.log(Shape.square(2))
