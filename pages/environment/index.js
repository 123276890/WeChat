Page({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  },
  onLoad: function () {
    this.setData({
      text: 'change data',
    }, function () {
      // 界面渲染后触发
      this.setData({"array[0].msg": 3}) //修改array[0]的数据
    })
  },
  ToIndexIndex: function () {
    wx.navigateTo({url: "../wxml/index"})
  }
})