var util = require('../../../utils/util.js');
Page({
    data: {
        showTopTips: false,
        date: util.formatDate(new Date),
        countries: ["早餐", "午餐", "晚餐"],
        countryIndex: 0,

    },
    showTopTips: function(){
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function(){
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },
    bindDateChange: function (e) {
      this.setData({
        date: e.detail.value
      })
    },
    bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    }

});