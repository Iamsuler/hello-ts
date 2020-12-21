function moduleLib (options) {
  console.log(options)
}

moduleLib.version = '1.2'
moduleLib.doSomething = function () {
  console.log('moduleLib is doing something')
}

module.exports = moduleLib
