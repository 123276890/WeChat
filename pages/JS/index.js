var b = require('./B.js')
var common = require('./common.js')
Page({
  helloMINA: function () {
    common.sayHello('MINA Hello')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA Goodbye')
  },
  onLoad() {
    this.helloMINA()
  },
  onShow() {
    this.goodbyeMINA()
  }
})