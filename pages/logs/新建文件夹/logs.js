//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    //中心点位置
    latitude: "",
    longitude: "",

    logs: [],
    //打点
    markers: [],
    //地图控件
    mapControls: 
     [ 
       { //定位 
        id: 0, 
        position: { //相对定位 
        left: app.globalData.scWidth * 0.03,
        top: app.globalData.scHeight * 0.02, 
        width: app.globalData.scWidth * 0.1 }, 
        iconPath: "../images/locat.png", //相对于当前文件的路径 
        clickable: true }, 
       { //扫码 
         id: 2,
         position: { //相对定位
         left: app.globalData.scWidth * 0.33, 
         top: app.globalData.scHeight * 0.01, 
         width: app.globalData.scWidth * 0.4, 
         height: app.globalData.scWidth * 0.2 }, 
         iconPath: "../images/scan.png", clickable: true }, 
       { //我的 
         id: 3, position: { //相对定位 
         left: app.globalData.scWidth * 0.87,
         top: app.globalData.scHeight * 0.02, 
         width: app.globalData.scWidth * 0.1 },
         iconPath: "../images/my.png", clickable: true }, 
         { //地图中心
           id: 14, position: { //相对定位 
           left: app.globalData.scWidth * 0.47, 
           top: app.globalData.scHeight * 0.42, 
           width: app.globalData.scHeight * 0.04 }, 
           iconPath: "../images/center.png", clickable: false
           } 
        ]
 

  },
  onLoad: function () {
    this.myMapCtx = wx.createMapContext("map", this)
    this.getLocation()
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
          },
          //图书馆1号
            {
              iconPath: "/images/map/others.png",
              id: 1,
              latitude: 31.7506859955,
              longitude: 119.9184644222,
              width: 35,
              height: 35,
              title: "当前位置",
              callout: {
                padding: 10,
                content: "1号垃圾桶",
                bgColor: "#DC143C",
                color: "#FFFF00",
                display: "ALWAYS"
              },
              label: { content: "标题" },
              anchor: {}
            },
            //2号
            {
              iconPath: "/images/map/others.png",
              id: 2,
              latitude: 31.7503484356,
              longitude: 119.9192368984,
              width: 35,
              height: 35,
              title: "当前位置",
              callout: {
                padding: 10,
                content: "2号垃圾桶",
                bgColor: "#DC143C",
                color: "#FFFF00",
                display: "ALWAYS"
              },
              label: { content: "标题" },
              anchor: {}
            },
            //三号
            {
              iconPath: "/images/map/location.png",
              id: 3,
              latitude: 31.7510144309,
              longitude: 119.9200630188,
              width: 35,
              height: 35,
              title: "当前位置",
              callout: {
                padding: 10,
                content: "3号垃圾桶",
                bgColor: "#DC143C",
                color: "#FFFF00",
                display: "ALWAYS"
              },
              label: { content: "标题" },
              anchor: {}
            }
            
            
            ],
        })
      },
    })
  },
  //以下地图使用
  getLocation: function () {      //获取当前位置，并移动地图到当前位置
    this.myMapCtx.moveToLocation()
  },
  scanCode: function () { //扫描二维码 
    wx.scanCode({ success(res){ //扫码成功 
    wx.showModal({ //扫码结果 
    title: "扫码结果", 
    content: res.result,
       })
      } 
    }) 
  },
  navigateToPersonal:function(){ 
     wx.navigateTo({
        url: "/pages/personal/personal" 
        }) 
      }, 
  mapControlTap: function (e) { //地图控件点击 
  switch (e.controlId) { 
    case 0://定位 
    this.getLocation() 
    break; 
    case 2://扫码 
    this.scanCode() 
    break; 
    case 3://我的 
    this.navigateToPersonal() 
    break;
      } 
  },
   
  // --回到当前位置
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
  // --选择位置按钮
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
  mapTap: function (e) { //地图点击 
  //console.log(e) 
  }, 
  mapMarker:function(e){ 
    console.log("点击了标记：" + e.markerId)
 },
   
  //



})
