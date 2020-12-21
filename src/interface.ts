/**
 * 接口继承类
 * 接口抽离所有成员，包括公共，私有和保护，但私有和保护属性不能被实现，使用需要注意
 */

class Auto {
  state = 1
  // private name: string = ''
  // protected age = 18

  eat () {
    // console.log(`${this.name} eating`)
  }
}

interface AutoInterface extends Auto {}

class A implements AutoInterface {
  state = 2
  private name = 'A'
  protected age = 20

  eat () {
    console.log(`${this.name} eating`)
  }
}
