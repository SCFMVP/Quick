//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    //中心点位置
    latitude: "",
    longitude: "",

    logs: [],
    //打点
    markers: [{ iconPath: "../../img/marker_red.png", 
      id: 1,
      latitude: 31.7538243306, 
      longitude: 119.9193120003,
      width: 35, height: 45 } 
     ],

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    //加载小程序是就显示当前位置
    var thisBlock = this;
    wx.getLocation({
      type: "gcj02",   //调用 wx.getLocation 接口需要指定 type 为 gcj02
      success: function (res) {
        console.log(res);

        thisBlock.setData({
          latitude: res.latitude,
          longitude: res.longitude,

          markers: [{
            iconPath: "/images/map/address.png",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }],
        })
      },
    })
  },
  //以下地图使用
  // 回到当前位置
  locationClick: function (event) {
    var thisBlock = this;

    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        console.log(res);

        thisBlock.setData({
          latitude: res.latitude,
          longitude: res.longitude,

          markers: [{
            iconPath: "/images/map/address.png",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }],
        })
      },
    })
  },
  // 选择位置按钮
  selectedClick: function () {
    // 设置权限
    wx.openSetting({
      success: function (res) {
        console.log(res);

        // 选择位置
        wx.chooseLocation({
          success: function (res) {
            console.log(res);

            // 打开位置
            wx.openLocation({
              latitude: res.latitude,
              longitude: res.longitude,
              name: res.name,
              address: res.address,
            })
          },
        })
      }
    })
  },
  //



})
