const message: string = 'hello-world'

enum Role {
  admin,
  user,
  superadmin = new Date().getTime()
} 

// console.log(Role.superadmin)

// setTimeout(() => {
//   console.log(Role.superadmin)
// }, 1000)

enum E { a, b }
enum G { a, b }
enum F { a = 'apple', b = 'huawei' }

const e1: E.a = 3
let e2: E
let f1: F.a = F.a
function foo (role: F) {
  if (role === F.a) {
    console.log(role)
  }
}
console.log(f1)

// 定义函数
// let add: (x: number, y: number) => number
// add = (x, y) => x + y


// interface Add {
//   (x: number, y: number): number
// }


type Add = (x: number, y: number) => number

let add: Add = (x, y) => x + y
let helloWorld: string = 'hello-world'
// helloWorld = 1
