var util = require('../../../utils/util.js');
Page({
    data: {
        showTopTips: false,
        date: util.formatDate(new Date),
        mealTypes: ["早餐", "午餐", "晚餐"],
        mealTypesIndex: 0
    },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.request({
      url: 'https://51399814.qcloud.la/simpleServer/MyHttpServlet',
      data: {
        serviceName:"orderService",
        mealType: e.detail.value.mealType,
        mealDate: e.detail.value.mealDate,
        mealNums: e.detail.value.mealNums
      },
      header: {
        'content-type': 'application/json'
      },
      complete: function (res) {
        if (res.data == "success"){
          wx.showToast({
            title: '订餐成功',
            icon: 'success',
            duration: 3000
          });
        }else{
          wx.showModal({
            content: res.data,
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          });
        }
      }
    })
  }

});