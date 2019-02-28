Page({
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://api.9uche.com/mobile/index.php?client_type=mini&act=search&op=price_cmp&curpage=1&page=10&city_id=0&sorter=0&down_pay=&mon_pay=&hot_id=&brand_id=&keyword=&car_price=&from=',
      success(res) {
        console.log(res.data.datas)
        that.setData({
          array: res.data.datas.summary
        })
      }
    })
  },
  tapName: function (event) {
    console.log(event)
  },
  handleTap: function (evt) {
    console.log(evt)
  },
  sayHello: function () {
    console.log('hello')
  },
  data: {
    loading: false,
  },
  tap: function () {
    this.setData({
      loading: true
    })
  },
  pop: function () {
    wx.showToast({
      title: 'test toast',
      icon: 'success',
      duration: 1000
    })
  },
  modal: function () {
    wx.showModal({
      title: '测试对话框',
      content: '告知情况，信息，和解决方案',
      confirmText: '主操作',
      concelText: '次要操作',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      }
    })
  },
  onPullDownRefresh: function () {
    // 下拉刷新
  },
  onReachBottom: function () {
    //上啦触底
  }
})