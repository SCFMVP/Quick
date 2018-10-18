Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      if (this.data.phone == "13815014565" && this.data.password=="13815014565")
      {//登录成功跳转至地图
        wx.navigateTo({
          url: '../logs/logs'
        })
      }else{
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'loading',
          duration: 2000})
      }
      // 这里修改成跳转的页面
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})
