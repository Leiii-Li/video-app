function requestServerPost(url, data, callBack) {
    var app = getApp();
    wx.showLoading({
        title: app.data.loadingMsg,
    });
    var serverUrl = app.serverUrl;
    wx.request({
        url: serverUrl + url,
        data: data,
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(response) {
            wx.hideLoading();
            if (response.data.status == 200) {
                callBack.onSuccess(response.data.data);
            } else {
                console.log("RequestError : " + url + " : " + response.data.msg);
                app.showToast(response.data.msg);
                callBack.onError();
            }
        },
        fail: function(error) {
            wx.hideLoading();
            console.log(url + app.data.network_error);
            app.showToast(app.data.network_error);
            callBack.onError();
        }
    })
}

function requestServerGet(url, data, callBack) {
    var app = getApp();
    wx.showLoading({
        title: app.data.loadingMsg,
    });
    var serverUrl = app.serverUrl;
    wx.request({
        url: serverUrl + url,
        data: data,
        method: 'get',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(response) {
            wx.hideLoading();
            debugger;
            if (response.data.status == 200) {
                callBack.onSuccess(response.data.data);
            } else {
                console.log("RequestError : " + url + " : " + response.data.msg);
                app.showToast(response.data.msg);
                callBack.onError();
            }
        },
        fail: function(error) {
            wx.hideLoading();
            console.log(url + app.data.network_error);
            app.showToast(app.data.network_error);
            callBack.onError();
        }
    })
}
function uploadFile(url, data, res, callBack) {
    var app = getApp();
    var url = app.serverUrl + url;
    wx.showLoading({
        title: app.data.loadingMsg,
    });
    wx.uploadFile({
        url: url,
        filePath: res.tempFilePaths[0],
        name: 'file',
        formData: {

        },
        header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
        },
        success: function (response) {
            wx.hideLoading();
            debugger;
            if (response.data.status == 200) {
                callBack.onSuccess(response.data.data);
            } else {
                console.log("RequestError : " + url);
                app.showToast(response.data.msg);
                callBack.onError();
            }
        },
        fail: function (response) {
            wx.hideLoading();
            console.log(url + app.data.network_error);
            app.showToast(app.data.network_error);
            callBack.onError();
        }
    });
}
module.exports.requestServerPost = requestServerPost
exports.requestServerGet = requestServerGet
exports.uploadFile = uploadFile