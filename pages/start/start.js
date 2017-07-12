const App = getApp()

Page({
  onLoad() { },
  onShow() { },
  bindload(e) {
    setTimeout(App.WxService.getStorageSync('token') ? this.goIndex : this.goLogin, 3000)
  },
  goIndex() {
    App.WxService.switchTab({
      url: '/pages/index/index'
    })
  },
  goLogin() {
    App.WxService.redirectTo('/pages/login/login')
  },
})
