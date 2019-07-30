// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    hotelList:[
      {
        imgpath:'/images/10.jpg',
        title:'仙然居人文客栈（天门山店）',
        grade:'5.0',
        grade_content:'很好“客栈环境不错”',
        cost:'5000+消费',
        location:'天门山国家森林公园，张家界火车站附近',
        labels:['本店新客8.8折','红包','急速付款','近火车站','森林吸氧'],
        hotal:'1',
        prices:'186',
        discounts:'53'
      },
      {
        imgpath: '/images/10.jpg',
        title: '仙然居人文客栈（天门山店）',
        grade: '5.0',
        grade_content: '很好“客栈环境不错”',
        cost: '5000+消费',
        location: '天门山国家森林公园，张家界火车站附近',
        labels: ['本店新客8.8折', '红包', '急速付款', '近火车站', '森林吸氧'],
        hotal: '1',
        prices: '186',
        discounts: '53'
      },
      {
        imgpath: '/images/10.jpg',
        title: '仙然居人文客栈（天门山店）',
        grade: '5.0',
        grade_content: '很好“客栈环境不错”',
        cost: '5000+消费',
        location: '天门山国家森林公园，张家界火车站附近',
        labels: ['本店新客8.8折', '红包', '急速付款', '近火车站', '森林吸氧'],
        hotal: '1',
        prices: '186',
        discounts: '53'
      },
      {
        imgpath: '/images/10.jpg',
        title: '仙然居人文客栈（天门山店）',
        grade: '5.0',
        grade_content: '很好“客栈环境不错”',
        cost: '5000+消费',
        location: '天门山国家森林公园，张家界火车站附近',
        labels: ['本店新客8.8折', '红包', '急速付款', '近火车站', '森林吸氧'],
        hotal: '1',
        prices: '186',
        discounts: '53'
      }
    ],
    cateringList:[
      {
        imgpath:'/images/16.jpg',
        title:'胡师傅三下锅（天门山店）',
        star:'★★★★★',
        price:'56',
        distance:'500',
        labels:['美食街','本地特色菜'],
        evaluate:['天门山三下锅第1名','牛肉不错'],
        group:'双人餐88元，3-5人餐280元',
        coupons:'50代60元，70代100元'
      },
      {
        imgpath: '/images/15.jpg',
        title: '柒酒烤肉（天门山店）',
        star: '★★★',
        price: '46',
        distance: '590',
        labels: ['玉兰路', '炙热烤肉'],
        evaluate: ['张家界第3名', '牛肉不错'],
        group: '双人餐88元，3-5人餐280元'
      },
      {
        imgpath: '/images/16.jpg',
        title: '胡师傅三下锅（天门山店）',
        star: '★★★★★',
        price: '56',
        distance: '500',
        labels: ['美食街', '本地特色菜'],
        evaluate: ['天门山三下锅第1名', '牛肉不错'],
        group: '双人餐88元，3-5人餐280元',
        coupons: '50代60元，70代100元'
      },
      {
        imgpath: '/images/15.jpg',
        title: '柒酒烤肉（天门山店）',
        star: '★★★★★',
        price: '46',
        distance: '590',
        labels: ['玉兰路', '炙热烤肉'],
        evaluate: ['张家界第3名', '牛肉不错'],
        group: '双人餐88元，3-5人餐280元'
      }
    ],
    scenicList:[
      {
        imgpath:'/images/17.jpg',
        title:'星空艺术馆',
        star:'★★★★☆',
        commet:'1485',
        location:'1.5',
        labels:['其他展馆展览','五一广场'],
        prices:'16',
        merit:['返优惠券','随买随用'],
        visit_pro:'4D体感游戏，结缘许愿树'
      },
      {
        imgpath: '/images/13.jpg',
        title: '华谊兄弟电影小镇',
        star: '★★★★',
        commet: '1987',
        location: '1.47',
        labels: ['旅游其他'],
        prices: '42',
        merit: ['返优惠券', '可订明日'],
        visit_pro: '无垠海底，任你畅游'
      },
      {
        imgpath: '/images/14.jpg',
        title: '海底世界',
        star: '★★★★☆',
        commet: '1485',
        location: '1.5',
        labels: ['其他展馆展览', '五一广场'],
        prices: '16',
        merit: ['返优惠券', '随买随用'],
        visit_pro: '4D体感游戏，结缘许愿树'
      }
    ],
    imgsUrl:[
      '/images/13.jpg',
      '/images/16.jpg',
      '/images/11.jpg',
      '/images/14.jpg',
      '/images/15.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  selectTab:function(e){
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
  changeTab:function(e){
    this.setData({
      currentTab: e.detail.current
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