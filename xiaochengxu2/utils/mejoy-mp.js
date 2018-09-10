!function (app,page) {
  var _app,_page,start_app,end_app,start_page,end_page,consuming_app,consuming_page,timer,m_cid;
  var mejoy = {
    sendEvent:function (value,callback) {
      var data ={
        event: 5,
        sub_event: 1,
        sub_event_value: value,
        sub_event_element: "button",
        ts : getTime(),
        consuming:getTime() - start_page,
        m_cid
      }
      ajax(data,callback)
    }
  }
  App = function (obj) {
    timer = setInterval(getSetting,2000)
    _app = obj;
    _app.mejoy = mejoy;
    handler(1,obj, 'onLaunch', launch_app), handler(1,obj, 'onShow', show_app), handler(1,obj, 'onHide', hide_app);
    app(_app);
  }
  Page = function (obj) {
    _page = obj;
    handler(2, obj, 'onShow', show_page), handler(2, obj, 'onHide', hide_page), handler(2, obj, 'onUnload', unload_page), handler(2, obj, 'onShareAppMessage', shareAppMessage);
    page(_page);
  }
  function handler (type,obj,name,callback) {
    var fn = obj[name];
    if(type == 1){
      _app[name] = function (e) {
        fn && fn.call(this,e);
        callback && callback.call(this,e);
      }
    }else if(type == 2){
      _page[name] = function (e) {
        fn && fn.call(this,e);
        callback && callback.call(this,e);
      }
    }
  }
  function launch_app(e) {
    m_cid = e.query.m_cid ? e.query.m_cid : '';
    var data = {
      event:1,
      sub_event:"",
      sub_event_value:"",
      sub_event_element:"",
      ts:getTime(),
      m_cid,
      visit_url : e.path,
      ref: e.referrerInfo ? e.referrerInfo.appId : '',
    };
    var systemInfo = getSystemInfoSync();
    getNetworkType(function (res) {
      data.os = systemInfo.system;
      data.app_os = systemInfo.version;
      data.device_brand = systemInfo.brand;
      data.device_model = systemInfo.model;
      data.user_lang = systemInfo.language;
      data.networkType = res.networkType;
      ajax(data)
    });
  }
  function show_app(){
    start_app = getTime();
  }
  function hide_app() {
    end_app = getTime();
    consuming_app = end_app - start_app
    var data = {
      event: 3,
      sub_event: "",
      sub_event_value: "",
      sub_event_element: "",
      ts: getTime(),
      m_cid,
      consuming: consuming_app
    };
    ajax(data);
  }
  function show_page(){
    start_page = getTime();
    var data = {
      event: 4,
      sub_event: "",
      sub_event_value: "",
      sub_event_element: "",
      m_cid,
      ts: getTime(),
      visit_url: getPageUrl(),
    };
    ajax(data)
  }
  function hide_page() {
    end_page = getTime();
    consuming_page = end_page - start_page;
    var data = {
      event: 6,
      sub_event: "",
      sub_event_value: "",
      sub_event_element: "",
      m_cid,
      ts: getTime(),
      visit_url: getPageUrl(),
      consuming: consuming_page
    };
    ajax(data);
  }
  function unload_page(){
    end_page = getTime();
    consuming_page = end_page - start_page;
    var data = {
      event: 6,
      sub_event: "",
      sub_event_value: "",
      sub_event_element: "",
      m_cid,
      ts: getTime(),
      visit_url: getPageUrl(),
      consuming: consuming_page
    };
    ajax(data);
  }
  function shareAppMessage(item){
    var data = {
      event: 5,
      sub_event: 6,
      sub_event_value: item.from,
      sub_event_element: "button",
      m_cid,
      ts: getTime(),
      visit_url: getPageUrl()
    };
    ajax(data);
  }
  function getTime(){
    return new Date().getTime()
  }
  function getPageUrl(){
    var pages = getCurrentPages();
    var currentPage = pages[pages.length-1];
    var url = currentPage.route
    return url;
  }
  function getSystemInfoSync(){
    var systemInfo = wx.getSystemInfoSync();
    return systemInfo;
  }
  function getNetworkType(callback){
    var networkType;
    wx.getNetworkType({
      success: function (res) {
        callback && callback(res)
      },
    });
  }
  function getSetting(){
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']){
          clearInterval(timer);
          wx.getUserInfo({
            withCredentials:false,
            success:function (res) {
              var data = {
                event: 2,
                sub_event: 5,
                sub_event_value: "",
                sub_event_element: "",
                m_cid,
                ts: getTime(),
                visit_url: getPageUrl(),
                sex_age_h_w: res.userInfo.gender+"***",
                nickname: res.userInfo.nickName,
                country_province_city: res.userInfo.country + '*' + res.userInfo.province + '*' + res.userInfo.city
              }; 
              ajax(data)
            },
            fail:function (err) {
              console.log(err)
            }
          })
        }
      }
    });
  }
  function ajax(data,callback){
    wx.request({
      url: 'https://api.mejoyapi.com/mejoy/adfb/mp_effect/v2',
      data,
      method: 'GET',
      success: function (res) {
        callback && callback();
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
}(App,Page)
