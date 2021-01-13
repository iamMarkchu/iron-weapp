//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  bindCreatePlan() {
    wx.navigateTo({
      url: '../plan/plan',
    })
  },
  onLoad: function () {

  },
  onShow() {
    this.getTabBar().init();
  }
})
