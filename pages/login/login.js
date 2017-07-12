
Page({
  data: {
    phone: '',
    password:''
  },

// 获取输入账号
  phoneInput :function (e) {
    this.setData({
      phone:e.detail.value
    })
  },

// 获取输入密码
  passwordInput :function (e) {
    this.setData({
      password:e.detail.value
    })
  },

// 登录
  login: function () {
    if(this.data.phone.length == 0 || this.data.password.length == 0){
      wx.showToast({  
        title: '用户名和密码不能为空',  
        icon: 'loading',  
        duration: 2000  
      })  
    }else {

      wx.setStorageSync('token', 'value')
      
      wx.switchTab({
        url: '../index/index'
      })
    }  
  }
})
