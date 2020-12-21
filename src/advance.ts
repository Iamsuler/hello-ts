// 交叉类型 &
interface IDog {
  run (): void
}
interface ICat {
  jump (): void
}

let pet: IDog & ICat = {
  run () {},
  jump () {}
}

// 联合类型
class DogClass implements IDog {
  run () {}
  eat () {}
}
class CatClass implements ICat {
  jump () {}
  eat () {}
}

enum Baby { Boy, Girl }

function getPet (baby: Baby) {
  let pet = baby === Baby.Boy ? new DogClass() : new CatClass()
  pet.eat() // 只能访问共同类型，取交集
  return pet
}

/**
 * 索引类型
 */

let obj = {
  a: 1,
  b: 2,
  c: 3
}

function getValue (obj: any, keys: string[]) {
  return keys.map(val => obj[val])
}
console.log(getValue(obj, ['a', 'b']))
console.log(getValue(obj, ['e', 'f']))

// keyof T
interface Obj {
  a: number;
  b: number;
  c: number
}

let objKeys: keyof Obj // 'a' | 'b'

// T[K]
let value: Obj['a'] // number

// T extends U 

// 改造getValue

function getValue2<T, K extends keyof T> (obj: T, keys: K[]): T[K][] {
  return keys.map(val => obj[val])
}
console.log(getValue2(obj, ['a', 'b']))
// console.log(getValue2(obj, ['e', 'f'])) // 报错 不属于Obj的属性

/**
 * 映射类型
 */
// 同态
type ReadonlyObj = Readonly<Obj>
type PartialObj = Partial<Obj>
type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>

/**
 * 条件类型
 */

// T extends U ? x : y
type typeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Obj ? 'obj' :
  T extends Function ? 'function' : 'object'

type T1 = typeName<Obj>
type T2 = typeName<{}>

// (A | B) extends U ? x : y
// (A extends U ? x : y) | (B extends U ? x : y)
type T3 = typeName<string | number>

// 官方 Exclude
type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
type T6 = Exclude<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c' === 'b' | 'c'

// 官方 NonNullable
type NotUndefined<T> = Diff<T, undefined | null>
type T5 = NotUndefined<string | number | undefined | null>
type T7 = NonNullable<string | number | undefined | null>

type T8 = Extract<'a' | 'b' | 'c', 'a' | 'b'>

// ReturnType 获取函数返回类型
type T9 = ReturnType<() => string>