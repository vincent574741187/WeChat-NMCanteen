var base64 = require("../../resources/images/base64");
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
    this.setData({
      icon: base64.icon20
    });
  }
});