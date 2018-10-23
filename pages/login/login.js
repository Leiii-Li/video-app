// pages/regist/regist.js
var app = getApp()
var requestUtil = require('../utils/RequestUtil.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '账号',
        username_hint: "请输入账号",
        password: "密码",
        password_hint: "请输入密码",
        not_empty: "用户名或密码不能为空",
        cancel: "前往注册",
        confirm: "登陆",
        registerUrl: "/login",
        registerSuccess: "登陆成功"
    },
    doLogin: function(data) {
        var registerSuccessNotificationMsg = this.data.registerSuccess;
        var formObject = data.detail.value;
        var userName = formObject.username;
        var password = formObject.password;
        // 验证用户信息
        if (userName.length == 0 || password.length == 0) {
            app.showToast(this.data.not_empty);
        } else {
            var callBack = {
                "onSuccess": function(data) {
                    app.showSuccessToast(registerSuccessNotificationMsg);
                    app.userInfo = data;
                    wx.redirectTo({
                        url: '../index/index',
                    })
                },
                "onError": function() {
                    
                }
            };
            var data = {
                username: userName,
                password: password
            };
            requestUtil.requestServerPost(this.data.registerUrl, data, callBack);
        }
    },
    toRegister: function() {
        wx.redirectTo({
            url: '../regist/regist',
        })
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