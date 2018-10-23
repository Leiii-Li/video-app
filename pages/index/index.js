//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {}
    },
    onLoad: function() {
        if (app.userInfo) {
            this.setData({
                userInfo: app.userInfo
            })
        }
    },
    toOwner: function() {
        wx.navigateTo({
            url: '../owner/owner',
        })
    }
})