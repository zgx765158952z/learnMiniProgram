// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.request({
      url: 'http://106.54.54.237:8000/api/v1/home/data?type=sell&page=1',
      success:(res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },

  //监听页面滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新')
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