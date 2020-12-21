declare function globalLib (options: globalLib.options): void

declare namespace globalLib {
  interface options {
    x: number
  }
  const version: string
  function doSomething (): void
}
