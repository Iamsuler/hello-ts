enum Language {
  Strong,
  Week
}

class Java {
  java: any
  helloJava () {
    console.log('hello java')
  }
}

class JavaScript {
  javascript: any
  helloJavaScript () {
    console.log('hello JavaScript')
  }
}

// 类型保护函数 当判断条件太复杂时才需要封装函数
function isJava (lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage (type: Language, x: number | string) {
  const lang = type === Language.Strong ? new Java() : new JavaScript()

  // if (!!(lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // instance
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // in
  // if ('java' in Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // typeof
  // if (typeof x === 'string') {
  //   x.toLowerCase()
  // } else {
  //   x.toFixed(2)
  // }

  // 类型保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  return lang
}
