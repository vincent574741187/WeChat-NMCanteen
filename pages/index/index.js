
Page({
  onLoad: function () {
    wx.request({
      url: "https://51399814.qcloud.la/simpleServer/MyHttpServlet", 
      data: {
        serviceName: 'orderService'
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
      }
    })

  },
  // 下拉刷新回调接口
  onPullDownRefresh: function () {
    
    console.log("下拉刷新回调接口生效")
    // 小程序提供的api，通知页面停止下拉刷新效果
    wx.stopPullDownRefresh()
  },
});