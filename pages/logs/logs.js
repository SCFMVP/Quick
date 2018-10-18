//index.js
//获取应用实例
const app = getApp()

Page
    (
    {
        data:
        {
            latitude: 23,   //经纬度
            longitude: 113,
            markers:[],
            mapControls:    //地图控件
            [
                { //定位
                    id: 0,
                    position: {                 //相对定位
                        left: app.globalData.scWidth * 0.03, 
                        top: app.globalData.scHeight * 0.85, 
                        width: app.globalData.scWidth * 0.2,
                        height: app.globalData.scWidth * 0.2
                    },
                    iconPath: "../images/locat.png",          //相对于当前文件的路径
                    clickable: true
                },
                { //扫码
                    id: 2,
                    position: {                 //相对定位
                        left: app.globalData.scWidth * 0.33,
                        top: app.globalData.scHeight * 0.85,
                        width: app.globalData.scWidth * 0.4,
                        height: app.globalData.scWidth * 0.2
                    },
                    iconPath: "../images/scan.png",
                    clickable: true
                },
                { //我的
                    id: 3,
                    position: {                 //相对定位
                        left: app.globalData.scWidth * 0.80,
                        top: app.globalData.scHeight * 0.85,
                        width: app.globalData.scWidth * 0.2,
                        height: app.globalData.scWidth * 0.2
                    },
                    iconPath: "../images/my.png",
                    clickable: true
                },
                
            ]
        },
        getLocation: function (){       //获取当前位置，并移动地图到当前位置
            this.myMapCtx.moveToLocation()   
        },
        onLoad: function () {           //加载
            this.myMapCtx = wx.createMapContext("myMap", this)
            this.getLocation()
            this.showMarkers()
        },
        //地图移动操作
        regionChanged: function (e) {                             //地图视野改变
            if (e.type == "end") {
                var that = this
                
            }
        },
        scanCode:function(){                    //扫描二维码
            wx.scanCode({
                success(res){                   //扫码成功
                    wx.showModal({              //扫码结果
                        title: "垃圾桶信息",
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
        mapControlTap: function (e) {          //地图控件点击
            switch (e.controlId) {
                case 0://定位
                    wx.showToast({
                      title: '正在定位',
                      icon: 'loading',
                      duration: 200
                    })
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
        mapTap: function(e){            //地图点击
            //console.log(e)
        },
        mapMarker:function(e){
            console.log("点击了标记：" + e.markerId)
        },
      //用于标记点
      showMarkers: function () {
        var thisBlock = this;
        thisBlock.setData({
          
        markers: [
          //--北苑区域--
          {//point1
          iconPath: "/images/map/address.png",
          id: 0,
            latitude: 31.7538243306,
            longitude: 119.9193120003,
          width: 35,
          height: 35,
          title: "当前位置",
          callout: {
            padding: 10,
            content: "北苑1号垃圾桶",
            bgColor: "#DC143C",
            color: "#FFFF00",
            display: "ALWAYS"
          },
          label: { content: "" },
          anchor: {}
        },
          {//point2
            iconPath: "/images/map/address.png",
            id: 1,
            latitude: 31.7541345092,
            longitude: 119.9203634262,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "北苑2号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point3
            iconPath: "/images/map/address.png",
            id: 2,
            latitude: 31.7538060848,
            longitude: 119.9213719368,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "北苑3号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point4
            iconPath: "/images/map/address.png",
            id: 3,
            latitude: 31.7526200983,
            longitude: 119.9197626114,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "北苑4号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//ponits5
            iconPath: "/images/map/address.png",
            id: 4,
            latitude: 31.7528755429,
            longitude: 119.9213933945,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "北苑5号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          }, 
          //--图书馆区域--
          {//point1
            iconPath: "/images/map/address.png",
            id: 5,
            latitude: 31.7506859955,
            longitude: 119.9184644222,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "图书馆1号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point2
            iconPath: "/images/map/address.png",
            id: 6,
            latitude: 31.7503484356,
            longitude: 119.9192368984,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "图书馆2号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point3
            iconPath: "/images/map/address.png",
            id: 7,
            latitude: 31.7510144309,
            longitude: 119.9200630188,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "图书馆3号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          //--西苑区域--8..
          {//point1
            iconPath: "/images/map/address.png",
            id: 8,
            latitude: 31.7526930825,
            longitude: 119.9169516563,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑1号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point2
            iconPath: "/images/map/address.png",
            id: 9,
            latitude: 31.7517625294,
            longitude: 119.9159860611,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑2号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point3
            iconPath: "/images/map/address.png",
            id: 10,
            latitude: 31.7507224883,
            longitude: 119.9153208733,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑3号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point4
            iconPath: "/images/map/address.png",
            id: 11,
            latitude: 31.7507407348,
            longitude: 119.9160075188,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑4号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point5
            iconPath: "/images/map/address.png",
            id: 12,
            latitude: 31.7507589812,
            longitude: 119.9166512489,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑5号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point6
            iconPath: "/images/map/address.png",
            id: 13,
            latitude: 31.7506312561,
            longitude: 119.9171447754,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑6号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point7
            iconPath: "/images/map/address.png",
            id: 14,
            latitude: 31.7494999690,
            longitude: 119.9159216881,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "西苑7号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          //--南苑区域--15..
          {//point1
            iconPath: "/images/map/address.png",
            id: 15,
            latitude: 31.7491806516,
            longitude: 119.9192905426,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "南苑1号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point2
            iconPath: "/images/map/address.png",
            id: 16,
            latitude: 31.7492810086,
            longitude: 119.9211359024,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "南苑2号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point3
            iconPath: "/images/map/address.png",
            id: 17,
            latitude: 31.7479124944,
            longitude: 119.9218225479,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "南苑3号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point4
            iconPath: "/images/map/address.png",
            id: 18,
            latitude: 31.7472191062,
            longitude: 119.9187326431,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "南苑4号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          },
          {//point5
            iconPath: "/images/map/address.png",
            id: 19,
            latitude: 31.7471278705,
            longitude: 119.9212431908,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "南苑5号垃圾桶",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "" },
            anchor: {}
          }

                 
          ]
        })
      },
        //
    }
    )