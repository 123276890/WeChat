var c = {
  sayHello: function (value) {
    console.log('hello' + ' ' + value)
  },

  sayGoodbye: function (value) {
    console.log('hello' + ' ' + value)
  }
}
module.exports = {
  sayHello : c.sayHello,
  sayGoodbye: c.sayGoodbye
}