// pages/others/waterfall_custom/waterfall_custom.js
Page({
  initData: [
    {
      id: 1,
      url: '/images/example0.png',
      name: '《虫师》'
    },
    {
      id: 2,
      url: '/images/example1.png',
      name: '《loading》'
    },
    {
      id: 3,
      url: '/images/example2.png',
      name: '《冰与火之歌》'
    },
    {
      id: 4,
      url: '/images/example3.png',
      name: '《鹿丸》'
    },
    {
      id: 5,
      url: '/images/example4.png',
      name: '《星空》'
    },
    {
      id: 6,
      url: '/images/example5.png',
      name: '《虫师》'
    },
    {
      id: 7,
      url: '/images/example6.png',
      name: '《loading》'
    },
    {
      id: 8,
      url: '/images/example7.png',
      name: '《冰与火之歌》'
    },
    {
      id: 9,
      url: '/images/example0.png',
      name: '《鹿丸》'
    },
    {
      id: 10,
      url: '/images/example4.png',
      name: '《星空》'
    }
  ],

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    leftHeight: 0,
    rightHeight: 0,
    length: 10,
    pageNo: 1,
    descHeight: 30, //图片文字描述的高度
    pageStatus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list1 = [], list2 = [];
    this.initData.forEach((item, index) => {

      if (index % 2 == 0) {
        list1.push(item);
      } else {
        list2.push(item);
      }
    })
    this.setData({
      list: list1.concat(list2),
      // list: this.initData,
      list1,
      list2,
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
    this.setData({
      list3: this.data.list
    });
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

  },

  loadImage(e) {
    let { list } = this.data;
    const index = e.currentTarget.dataset.index;
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    console.log("--- index --->", index,"-----loadImage e----->", e);
    const imgWidth = e.detail.width;
    const imgHeight = e.detail.height;

    list[index].width = (windowWidth - 30) / 2;
    list[index].height = (windowWidth - 30) / 2 / imgWidth * imgHeight;
    this.setData({
      list
    })
  },
  loadImage1(e) {
    let { list1 } = this.data;
    const index = e.currentTarget.dataset.index;
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    console.log("--- index --->", index,"-----loadImage e----->", e);
    const imgWidth = e.detail.width;
    const imgHeight = e.detail.height;

    list1[index].width = (windowWidth - 30) / 2;
    list1[index].height = (windowWidth - 30) / 2 / imgWidth * imgHeight;
    this.setData({
      list1
    })
  },
  loadImage2(e) {
    let { list2 } = this.data;
    const index = e.currentTarget.dataset.index;
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    console.log("--- index --->", index,"-----loadImage e----->", e);
    const imgWidth = e.detail.width;
    const imgHeight = e.detail.height;

    list2[index].width = (windowWidth - 30) / 2;
    list2[index].height = (windowWidth - 30) / 2 / imgWidth * imgHeight;
    this.setData({
      list2
    })
  }
})