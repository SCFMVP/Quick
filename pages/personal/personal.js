//index.js
//获取应用实例
const app = getApp()

Page
    (
    {
        data:
        {

        },
        onLoad: function () {           //加载
            console.log("page load")
        },
         
        oceanConnect: function () {
          wx.navigateTo({
            url: '../tasklist/tasklist'
          })
          /*{
            "errno": 0,
              "data": {
              "update_at": "2018-10-16 19:12:32",
                "unit": "",
                  "id": "status",
                    "unit_symbol": "",
                      "current_value": 0
            },
            "error": "succ"
          }*/
          //第一步获取token
          /*wx.request({
            url: 'http://api.heclouds.com/devices/47337137/datastreams/status',
            method: 'GET',
            header: { 'content-type': 'application/x-www-form-urlencoded' ,
              'api-key':'=clxkBIrCcoqAlWbmWWj1M1dK8w='
            },
            data: {},
            success: function (res) {
              if (res.statusCode === 200) {
                //参考: https://blog.csdn.net/jfh389987366/article/details/80320483
                console.log(JSON.stringify(res))// 服务器回包内   
                console.log("res.data:" + res.data.data.current_value)// 服务器回包内               
                wx.navigateTo({
                url: '../tasklist/tasklist'
              })
              }
              //wx.showToast({ title: res.data.data[0] })
            },
            fail: function (res) {
              wx.showToast({ title: '系统错误' })
            },
            complete: function (res) {
              wx.hideLoading()
            }
          })*/
          //第二步获取历史数据

       },
       //
    }
    )