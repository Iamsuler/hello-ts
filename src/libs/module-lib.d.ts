declare function moduleLib (options: moduleLib.options): void

declare namespace moduleLib {
  interface options {
    x: number
  }
  const version: string
  function doSomething (): void
}

export default moduleLib