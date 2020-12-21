function globalLib (option) {
  console.log(option)
}

globalLib.version = '1.2'

globalLib.doSomething = function () {
  console.log('global is doing something')
}
