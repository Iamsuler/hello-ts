// 函数与命名空间合并
function Lib () {}
namespace Lib {
  export const version = '1.2'
}

console.log(Lib)

class LibClass {}
namespace LibClass {
  export const version = '1.2'
}

console.log(LibClass)

enum LibEnum {
  Blue,
  Yellow
}
namespace LibEnum {
  export function mix () {}
}

console.log(LibEnum)
