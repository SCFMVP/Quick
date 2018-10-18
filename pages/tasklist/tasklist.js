// pages/tasklist/tasklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    status:0,
    helpmsg:0,
    flag1:0,
    flag2:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //var status=0;
    //var helpmsg=0;
    //Todo: onenet 网络请求
    //请求status数据
    wx.request({
      url: 'http://api.heclouds.com/devices/47337137/datastreams/status',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'api-key': '=clxkBIrCcoqAlWbmWWj1M1dK8w='
      },
      data: {},
      success: function (res) {
        if (res.statusCode === 200) {
          //参考: https://blog.csdn.net/jfh389987366/article/details/80320483
          console.log(JSON.stringify(res))// 服务器回包内   
          console.log("res.data:" + res.data.data.current_value)// 服务器回包内  
          that.data.status = res.data.data.current_value
          //that.status = res.data.data.current_value
          
        }
        //wx.showToast({ title: res.data.data[0] })
      },
      fail: function (res) {
        wx.showToast({ title: '系统错误' })
      },
      complete: function (res) {
        wx.hideLoading()
        that.data.flag1=1;
      }
    })
    //请求helpmsg数据
    wx.request({
      url: 'http://api.heclouds.com/devices/47337137/datastreams/helpmsg',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'api-key': '=clxkBIrCcoqAlWbmWWj1M1dK8w='
      },
      data: {},
      success: function (res) {
        if (res.statusCode === 200) {
          //参考: https://blog.csdn.net/jfh389987366/article/details/80320483
          console.log(JSON.stringify(res))// 服务器回包内   
          console.log("res.data:" + res.data.data.current_value)// 服务器回包内  
          that.data.helpmsg=res.data.data.current_value
          
        }
        //wx.showToast({ title: res.data.data[0] })
      },
      fail: function (res) {
        wx.showToast({ title: '系统错误' })
      },
      complete: function (res) {
        wx.hideLoading()
        that.data.flag2=1;
      }
    })
    //log right
    console.log(that.data.status)
    console.log(that.data.helpmsg)
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../images/boy.png",
          "useDate": "2018-10-28",
          "cx": "图书馆1号垃圾桶",
          "time": "满溢告警",
          "feiyong": "工作正常"
        }
      ]     
    };
    //允许判断
    if(that.data.flag1==1 && that.data.flag2==1){
      that.data.flag1 == 0;
      that.data.flag2 == 0;
      //设置data展示task
      if (that.data.status == 0 && that.data.helpmsg == 0){
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "还没有任务",
              "time": "null",
              "feiyong": "工作正常"
            }
          ]
        };
        console.log(data.datas)// 服务器回包内 
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 1 && that.data.helpmsg == 1) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "满溢告警",
              "feiyong": "工作正常"
            },
            {
              "id": 2,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "求助信息",
              "feiyong": "工作正常"
            }
          ]
        };
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 1 && that.data.helpmsg == 0) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "满溢告警",
              "feiyong": "工作正常"
            }
          ]
        };
        console.log(data.datas)// 服务器回包内 
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 0 && that.data.helpmsg == 1) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "求助信息",
              "feiyong": "工作正常"
            }
          ]
        };
        that.setData({
          carInfoData: data.datas
        })
      }
    }
    console.log(JSON.stringify(data.datas))
    //console.log(data.datas);
    //设置任务展示信息
    //that.setData({
    //  carInfoData: data.datas
    //})
  },

  //切换隐藏和显示 
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //反馈
  feedBack:function(){
    //Todo: 
    wx.showToast({ title: '已上报事件' })
  },
  //刷新任务
  reFlash:function(){
    var that = this;
    //直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的
    wx.showToast({
      title: '正在刷新',
      icon: 'loading',
      duration: 200
    })
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../images/boy.png",
          "useDate": "2018-10-28",
          "cx": "图书馆1号垃圾桶",
          "time": "满溢告警",
          "feiyong": "工作正常"
        }
      ]
    };
  //Todo:网络请求
    //允许判断
    if (that.data.flag1 == 1 && that.data.flag2 == 1) {
      that.data.flag1 == 0;
      that.data.flag2 == 0;
      //设置data展示task
      if (that.data.status == 0 && that.data.helpmsg == 0) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "还没有任务",
              "time": "null",
              "feiyong": "工作正常"
            }
          ]
        };
        console.log(data.datas)// 服务器回包内 
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 1 && that.data.helpmsg == 1) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "满溢告警",
              "feiyong": "工作正常"
            },
            {
              "id": 2,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "求助信息",
              "feiyong": "工作正常"
            }
          ]
        };
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 1 && that.data.helpmsg == 0) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "满溢告警",
              "feiyong": "工作正常"
            }
          ]
        };
        console.log(data.datas)// 服务器回包内 
        that.setData({
          carInfoData: data.datas
        })
      }
      if (that.data.status == 0 && that.data.helpmsg == 1) {
        data = {
          "datas": [
            {
              "id": 1,
              "imgurl": "../images/boy.png",
              "useDate": "2018-10-28",
              "cx": "图书馆1号垃圾桶",
              "time": "求助信息",
              "feiyong": "工作正常"
            }
          ]
        };
        that.setData({
          carInfoData: data.datas
        })
      }
    }

  }



})