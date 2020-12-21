interface Handler {
  (x: number, y: number): void
}

function highFunction (handler: Handler) {
  return handler
}

// 参数个数 多的可以兼容少的
let handler1: Handler = (x: number) => {}
let handler2 = (x: number, y: number, z: number) => {}

highFunction(handler1)
// highFunction(handler2)

/**
 * 可选参数和剩余参数
 */
let func1 = (x: number, y: number) => {}
let func2 = (x?: number, y?: number) => {}
let func3 = (...args: number[]) => {}
// 固定参数可以兼容可选和剩余参数
func1 = func2
func1 = func3

// 参数类型必须要匹配
// 返回值成员少的兼容多的


// 函数重载 参数个数、类型，返回值类型兼容
function hotLoad(x: number, y: number): number
function hotLoad(x: string, y: string): string
function hotLoad(x: any, y: any, z: any): any

function hotLoad (x: any): any {
  return x
}


// 枚举类型之间不兼容
enum Fruit {
  apple,
  orange
}
enum Color {
  red,
  green
}

let num1: Fruit.apple = 1
// let num2: Fruit.apple = Color.red

// 类兼容，只比较属性，静态函数和构造函数不参与比较
// 如果类中有私有成员，则不兼容
// 父类和子类兼容只能在子类没有独有的属性的情况下
class Tree {
  id: string = ''
  // private name: string = 'x'

  constructor(x: string, y: string) {}
}

class SubTree {
  id: string = '1'
  // private name: string = 'x'

  constructor (x: number) {}
}

let tree1 = new Tree('1', '2')
let subtree1 = new SubTree(1)

tree1 = subtree1
subtree1 = tree1

// 泛型兼容性
interface Empty<T> {
  // value: T // 没有属性的时候兼容
}

let empty1: Empty<number> = {
  value: 1
}
let empty2: Empty<string> = {
  value: '1'
}
empty1 = empty2

// 泛型定义相同，函数兼容
let empty3 = <T>(x: T): T => {
  return x
}
let empty4 = <U>(x: U): U => {
  return x
}

empty3 = empty4
