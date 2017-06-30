const App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
      {
        icon: '../../../resources/images/iconfont-order.png',
        text: '我的订单',
        path: '/pages/order/list/list'
      }
    ],

  },
  onLoad() {
    this.getUserInfo()
  },
  navigateTo(e) {
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: path
    })
  },
  getUserInfo() {
    const userInfo = App.globalData.userInfo
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
      return
    }
    App.getUserInfo()
      .then(data => {
        console.log(data)
        this.setData({
          userInfo: data
        })
      })
  }
})