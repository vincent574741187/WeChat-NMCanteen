
Page({
  onLoad: function () {
    wx.request({
      url: "https://51399814.qcloud.la/simpleServer/MyHttpServlet", 
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
      }
    })

  }
});