const App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
      {
        icon: '../../../resources/images/iconfont-order.png',
        text: '我的订单',
        path: '/pages/order/list/index'
      }
    ],
    settings: [
      {
        icon: '../../../resources/images/iconfont-clear.png',
        text: '清除缓存',
        path: '0.0KB'
      }
    ]

  },
  onLoad() {
    this.getUserInfo()
    this.getStorageInfo()
  },
  navigateTo(e) {
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: path
    })
  },
  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path

    switch (index) {
      case 0:
        App.WxService.showModal({
          title: '友情提示',
          content: '确定要清除缓存吗？',
        })
          .then(data => data.confirm == 1 && App.WxService.clearStorage())
          .then(data => this.getStorageInfo())
        break
      default:
        App.WxService.navigateTo(path)
    }
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
  },
  getStorageInfo() {
    App.WxService.getStorageInfo()
      .then(data => {
        console.log(data)
        this.setData({
          'settings[0].path': `${data.currentSize}KB`
        })
      })
  },
  logout() {
    App.WxService.showModal({
      title: '友情提示',
      content: '确定要登出吗？',
    })
      .then(data => data.confirm == 1 && this.signOut())
  },
  signOut() {
    App.WxService.removeStorageSync('token')
    App.WxService.redirectTo('/pages/login/login')
  }
})