/**
 * 类
 */

/**
 * 抽象类
 * 抽象类: abstract 修饰， 里面可以没有抽象方法。但有抽象方法(abstract method)的类必须声明为抽象类(abstract class)
 * 多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
 */
abstract class Animal {
  abstract sleep (): void
}

class Dog extends Animal {
  name: string
  readonly type: string = 'animal'

  // 静态属性，只能通过类名访问
  static food = 'bones'
  constructor(name: string) {
    super()
    this.name = name
  }

  sleep () {
    console.log('dog sleep')
  }

  say () {
    // console.log(this.food) // 静态属性，不能被类访问
    console.log('wangwang')
    this.laugh() // 私有成员，可以被类本身访问
    this.run() // 受保护成员，可以被类本身访问 
  }

  // 私有成员，只能被类本身访问，不能被实例和子类访问
  private laugh () {
    console.log('hahaha')
  }

  // 受保护成员，只能在类或者子类中访问，不能被实例访问
  protected run () {
    console.log('running')
  }
}

class Hasky extends Dog {
  // 构造函数的参数也可以添加修饰符，自动将参数转换成实例属性
  constructor (name: string, public color: string) {
    super(name)

    this.color = color
  }

  eat () {
    // console.log(this.food) // 静态属性，不能被类访问
    console.log('eat food')
    this.run() // 受保护成员，可以在子类中访问
  }
}

const dog = new Dog('wangcai')
dog.say()
// dog.laugh() // 私有成员，不能被实例和子类访问
// dog.run() // 受保护成员，不能被实例访问
console.log(Dog.food) // 静态属性，只能通过类名访问
console.log(Hasky.food) // 静态属性可以被继承 
// console.log(dog.food) // 静态属性，不能通过实例访问

/**
 * 链式调用
 */

class WorkFlow {
  step1 () {
    return this
  }

  step2 () {
    return this
  }
}

class MyWorkFlow extends WorkFlow {
  next () {
    return this
  }
}

new MyWorkFlow().step1().next().step2()


/**
 * 接口和类
 * 接口只能约束class公有属性
 * 接口不能约束class的构造函数
 */

interface Human {
  // new (name: string): void;
  name: string;
  eat (): void
}

class Asian implements Human {
  name: string

  constructor (name: string) {
    this.name = name
  }

  eat () {
    console.log(`${this.name} eating`)
  }

  sleep () {
    console.log(`${this.name} slepping`)
  }
}
