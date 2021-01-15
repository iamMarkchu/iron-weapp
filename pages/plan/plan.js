// pages/plan/plan.js
const header = {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MTA4MDM0NzMsImlzcyI6InRlc3QiLCJuYmYiOjE2MTA3MTcwNzN9.utob2SZfbKWbeIyZMjq-rfvpXkEQzuWmRMOHBIe4xgo"
}
Page({

/**
* 页面的初始数据
*/
data: {
active: 0,
topCategories: [],
selectedCatId: 0,
movements: [],
},
onChange(event) {
var index = event.detail.index
var selectedCatId = this.data.topCategories[index].id
this.setData({
selectedCatId
})
this.getMovements(selectedCatId)
},
/**
* 生命周期函数--监听页面加载
*/
onLoad: function (options) {
this.getTopCategory();
},
getTopCategory: function () {
wx.request({
header,
url: 'http://127.0.0.1:8082/api/topCategories',
method: 'GET',
success: (res) => {
  console.log(res)
  if (res.data.data.length > 0) {
    var selectedCatId = res.data.data[0].id
  }
  this.setData({
    topCategories: res.data.data,
    selectedCatId
  })
  this.getMovements(selectedCatId)
}
})
},
getMovements: function(catId) {
wx.request({
header,
url: 'http://127.0.0.1:8082/api/movements?cat_id=' + catId,
method: 'GET',
success: (res) => {
  console.log(res)
  this.setData({
    movements: res.data.data
  })
}
})
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

}
})