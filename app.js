//app.js
App({
    serverUrl: "http://a20f0a70.ngrok.io",
    userInfo: null,
    data: {
        confirm: "确认",
        cancel: "取消",
        network_error: '网络错误，请稍后重试',
        loadingMsg:"请等待"
    },
    showToast: function(msg) {
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: 2000
        });
    },
    showSuccessToast: function (msg) {
        wx.showToast({
            title: msg,
            icon: 'success',
            duration: 2000
        });
    }
})