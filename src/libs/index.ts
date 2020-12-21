// 全局
// globalLib({x: 1})
// globalLib.doSomething()

// module
import moduleLib from './module-lib.js'

moduleLib.doSomething()

import moment from 'moment'

declare module 'moment' {
  export function myFunction (): void
}

moment.myFunction = () => {}

declare global {
  namespace globalLib {
    function doAnything (): void
  }
}

globalLib.doAnything = function () {}

let arr: number[] = []
arr.flat()
