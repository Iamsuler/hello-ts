/**
 * 泛型
 */

type Log = <T>(x: T, y: T) => T
interface ILog {
  <T>(x: T, y: T): T
}

function log<T> (x: T, y: T): T {
  return x
}

let myLog: Log = log
let myLog2: ILog = log

myLog<number>(2, 3)


/**
 * 泛型类和泛型约束
 */

class Bird<T> {
  name: T
  // static name: T // 泛型不能约束静态成员

  constructor(name: T) {
    this.name = name
  }

  doSomething (value: T) {
    console.log(`${this.name} is doing ${value}`)
  }
}

let bird1 = new Bird('1')
bird1.doSomething('0')

/**
 * 泛型约束
 */

interface Length {
  length: number
}

function print<T extends Length> (value: T): T {
  console.log(value, value.length)
  return value
}
