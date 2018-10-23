// pages/owner/owner.js
var app = getApp();
var requestUtil = require('../utils/RequestUtil.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        upload: '上传作品',
        logout: '注销',
        logoutSuccess: '注销成功',
        logoutUrl: '/logout',
        changeFaceImageUrl: '/user/uploadFaceImage',
        changeFaceImageSuccess: "上传成功",
        fans: '粉丝',
        follow: '关注',
        pick: '点赞'
    },
    changeFaceImage: function() {
        var changeFaceImageSuccess = this.data.changeFaceImageSuccess;
        var url = this.data.changeFaceImageUrl
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                var data;
                var callBack = {
                    "onSuccess": function(data) {
                        console.log(changeFaceImageSuccess);
                        app.showSuccessToast(changeFaceImageSuccess);
                    },
                    "onError": function() {

                    }
                };
                requestUtil.uploadFile(url + "?userId=" + app.userInfo.id, data, res, callBack);
            }
        })
    },
    uploadVideo: function() {

    },
    logout: function() {
        var logoutSuccessMsg = this.data.logoutSuccess;
        var data;
        var callBack = {
            "onSuccess": function(data) {
                app.showSuccessToast(logoutSuccessMsg);
                app.userInfo = null;
            },
            "onError": function() {

            }
        };
        requestUtil.requestServerPost(this.data.logoutUrl + "?userId=" + app.userInfo.id, data, callBack);
    },
    showFans: function() {

    },
    showFollow: function() {

    },
    showPick: function() {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})