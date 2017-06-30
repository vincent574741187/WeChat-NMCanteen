import WxService from 'utils/WxService'
App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    userInfo: null
  },
  getUserInfo() {
    return this.WxService.login()
      .then(data => {
        console.log(data)
        return this.WxService.getUserInfo()
      })
      .then(data => {
        console.log(data)
        this.globalData.userInfo = data.userInfo
        return this.globalData.userInfo
      })
  },
  WxService: new WxService
});